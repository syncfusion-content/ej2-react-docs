import * as React from 'react';
import { useRef, useCallback } from 'react';
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective, AnnotationsDirective, AnnotationDirective } from '@syncfusion/ej2-react-circulargauge';

const getScoreComment = (score) => {
  if (score >= 90) return 'Outstanding recipe! Highly recommended.';
  if (score >= 80) return 'Very good recipe with excellent balance.';
  if (score >= 70) return 'Solid recipe. Minor improvements possible.';
  return 'Average recipe. Consider refining ingredients or steps.';
};

const gaugeLabelStyle = {
  font: {size: '12px'},
  position: 'Outside',
  offset: -40
};

const capSettings = {
  radius: 8,
  border: { width: 2 }
};

const calculateRecipeScore = (recipe) => {
  const ingredients = recipe.ingredients || [];
  const instructions = recipe.instructions || [];

  if (!ingredients.length) return 15;
  if (!instructions.length) return 20;

  let score = 100;
  let validIng = 0;
  let validSteps = 0;

  for (const ing of ingredients) {
    const name = (ing.name || '').trim();
    const qty = (ing.quantity || '').trim();
    if (!name || !qty) {
      score -= 12;
    } else {
      validIng++;
    }
  }

  if (validIng >= 5) score += 10;
  else if (validIng === 1) score -= 20;
  else if (validIng === 2) score -= 10;

  for (const step of instructions) {
    const s = (step || '').trim();
    if (!s) {
      score -= 15;
    } else {
      validSteps++;
    }
  }

  if (validSteps >= 4) score += 10;
  else if (validSteps === 1) score -= 25;
  else if (validSteps === 2) score -= 15;
  else if (validSteps === 3) score -= 5;

  if (validIng >= 3 && validSteps >= 3) score += 8;

  score += Math.floor(Math.random() * 6);

  return Math.min(100, Math.max(10, score));
};

const getCurrentRecipeData = (container) => ({
  title: container.querySelector('.recipe-title')?.textContent?.trim() || 'Untitled Recipe',
  ingredients: Array.from(container.querySelectorAll('.ingredient-item')).map((item) => ({
    name: item.querySelector('.ing-name')?.textContent?.trim(),
    quantity: item.querySelector('.ing-qty')?.textContent?.trim()
  })).filter((ing) => ing.name),
  instructions: Array.from(container.querySelectorAll('.step-item .step-text'))
    .map(el => el.textContent?.trim())
    .filter(Boolean)
});

const WeatherCardTemplate = () => (
  <div tabIndex={0} className="e-card" id="weather_card" role="button">
    <div className="e-card-header">
      <div className="e-card-header-caption">
        <div className="e-card-header-title">Today</div>
        <div className="e-card-sub-title">New York - Scattered Showers.</div>
      </div>
    </div>
    <div className="e-card-header weather_report">
      <div className="e-card-header-image"></div>
      <div className="e-card-header-caption">
        <div className="e-card-header-title">1º / -4º</div>
        <div className="e-card-sub-title">Chance for snow: 100%</div>
      </div>
    </div>
  </div>
);

const RecipeScoreTemplate = (args) => (
  <div className="score-gauge-panel" style={{ padding: '20px', background: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
    <h4 style={{ marginBottom: '15px' }}>{args.title}</h4>
    <CircularGaugeComponent
      height="380px"
      width="380px"
      title={args.title}
      allowMargin={false}
      titleStyle={{ size: '18px', fontFamily: 'inherit' }}
      tooltip={{ enable: true }}
    >
      <AxesDirective>
        <AxisDirective
          startAngle={270} endAngle={90}
          minimum={0} maximum={10} radius="105%"
          lineStyle={{ width: 0 }}
          majorTicks={{ height: 12, width: 1.5, interval: 2, offset: 35 }}
          minorTicks={{ height: 0 }}
          labelStyle={gaugeLabelStyle}
        >
          <AnnotationsDirective>
            <AnnotationDirective
              content={`<div style="font-size:22px; margin-top:15px; font-family:inherit;">${args.score}</div>`}
              angle={0}
              zIndex="1"
              radius="-10%"
            />
          </AnnotationsDirective>
          <PointersDirective>
            <PointerDirective
              radius="70%"
              needleEndWidth={2}
              pointerWidth={5}
              value={args.score / 10}
              cap={capSettings}
            />
          </PointersDirective>
          <RangesDirective>
            <RangeDirective start={0} end={2} startWidth={40} endWidth={40} color="#F03E3E" radius="80%" />
            <RangeDirective start={2} end={5} startWidth={40} endWidth={40} color="#f6961e" radius="80%" />
            <RangeDirective start={5} end={8} startWidth={40} endWidth={40} color="#FFDD00" radius="80%" />
            <RangeDirective start={8} end={10} startWidth={40} endWidth={40} color="#30B32D" radius="80%" />
          </RangesDirective>
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
    <div style={{ fontSize: '2.4em', fontWeight: 'bold', color: '#30B32D', margin: '10px 0' }}>
      {args.score}/100
    </div>
    <p style={{ color: '#555' }}>{getScoreComment(args.score)}</p>
  </div>
);

const App = () => {
  const assistInstance = useRef(null);
  const scoreBlocksRef = useRef([]);

  const promptSuggestions = [
    'Suggest a healthy breakfast recipe under 5 ingredients',
    'What is the weather in New York?'
  ];

  const promptsData = [
    {
      prompt: 'What is the weather in New York?',
      blocks: [
        { blockType: 'text', content: 'Here is the current weather forecast for your location:' },
        { blockType: 'tool', toolName: 'weather-card' },
        {
          blockType: 'text',
          content: "**Scattered Showers Expected** with temperatures ranging from **1°C to -4°C**. There is a **100% chance of snow**, so it's recommended to bundle up and exercise caution if traveling. The weather system is expected to continue throughout the day with moderate precipitation."
        }
      ]
    }
  ];

  const RecipeMakerTemplate = useCallback((args) => {
    const handleAddIngredient = (e) => {
      const container = e.currentTarget.closest('.recipe-panel');
      const list = container.querySelector('.ingredients-list');
      const newItem = document.createElement('div');
      newItem.className = 'ingredient-item';
      newItem.innerHTML = `
        <span class="ing-name" contenteditable="true" style="flex:1;">New Ingredient</span>
        <span class="ing-qty" contenteditable="true" style="width:90px; text-align:right;">qty</span>
        <button class="e-btn e-small e-danger remove-ing e-icons e-close"></button>`;
      list.appendChild(newItem);
    };

    const handleAddStep = (e) => {
      const container = e.currentTarget.closest('.recipe-panel');
      const list = container.querySelector('.instructions-list');
      const index = list.children.length + 1;
      const newItem = document.createElement('div');
      newItem.className = 'step-item';
      newItem.innerHTML = `
        <strong>${index}.</strong>
        <span class="step-text" contenteditable="true" style="flex:1;">New instruction step...</span>
        <button class="e-btn e-small e-danger remove-step e-icons e-close"></button>`;
      list.appendChild(newItem);
    };

    const handleRemoveItem = (e) => {
      const target = e.target;
      if (target.classList.contains('remove-ing') || target.classList.contains('remove-step')) {
        target.parentElement?.remove();
      }
    };

    const handleCheckScore = (e) => {
      const container = e.currentTarget.closest('.recipe-panel');
      const recipeData = getCurrentRecipeData(container);
      const score = calculateRecipeScore(recipeData);

      scoreBlocksRef.current = [
        { blockType: 'text', content: `**Recipe Score Analysis**\n\nHere is the health & quality score for **${recipeData.title}**.` },
        { blockType: 'tool', toolName: 'recipe-score-gauge', props: { score, title: recipeData.title } },
        { blockType: 'text', content: 'You can continue editing the recipe above and check the score again anytime.' }
      ];

      assistInstance.current?.executePrompt('Generate a score analysis for this recipe.');
    };

    return (
      <div className="recipe-panel">
        <h2 className="recipe-title" contentEditable suppressContentEditableWarning>{args.title}</h2>

        <div className="recipe-section">
          <h4>🥕 Ingredients
            <button className="e-btn e-primary e-small" style={{ float: 'right' }} onClick={handleAddIngredient}>+ Add Ingredient</button>
          </h4>
          <div className="ingredients-list" onClick={handleRemoveItem}>
            {args.ingredients?.map((ing, i) => (
              <div className="ingredient-item" key={i}>
                <span className="ing-name">{ing.name}</span>
                <span className="ing-qty">{ing.quantity}</span>
                <button className="e-btn e-small e-danger remove-ing e-icons e-close"></button>
              </div>
            ))}
          </div>
        </div>

        <div className="recipe-section">
          <h4>📋 Instructions
            <button className="e-btn e-primary e-small" style={{ float: 'right' }} onClick={handleAddStep}>+ Add Step</button>
          </h4>
          <div className="instructions-list" onClick={handleRemoveItem}>
            {args.instructions?.map((step, i) => (
              <div className="step-item" key={i}>
                <strong>{i + 1}.</strong>
                <span className="step-text">{step}</span>
                <button className="e-btn e-small e-danger remove-step e-icons e-close"></button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button className="e-btn e-primary check-score-btn" onClick={handleCheckScore}>Check Recipe Score</button>
        </div>
      </div>
    );
  }, []);

  const onCreated = () => {
    assistInstance.current?.registerToolUI({ toolName: 'recipe-maker', template: RecipeMakerTemplate });
    assistInstance.current?.registerToolUI({ toolName: 'recipe-score-gauge', template: RecipeScoreTemplate });
    assistInstance.current?.registerToolUI({ toolName: 'weather-card', template: WeatherCardTemplate });

    if (assistInstance.current) {
      assistInstance.current.prompts = promptsData;
    }
  };

  const toolbarSettings = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: (args) => {
      if (args.item.iconCss === 'e-icons e-refresh') {
        if (assistInstance.current) {
          assistInstance.current.prompts = [];
          assistInstance.current.promptSuggestions = promptSuggestions;
        }
      }
    }
  };

  const onPromptRequest = async (args) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (args.prompt === 'What is the weather in New York?') {
      assistInstance.current?.addPromptResponse({
        blocks: [
          { blockType: 'text', content: 'Here is the current weather forecast for your location:' },
          { blockType: 'tool', toolName: 'weather-card' },
          {
            blockType: 'text',
            content: "**Scattered Showers Expected** with temperatures ranging from **1°C to -4°C**. There is a **100% chance of snow**, so it's recommended to bundle up and exercise caution if traveling. The weather system is expected to continue throughout the day with moderate precipitation."
          }
        ]
      });
      return;
    }

    if (args.prompt === 'Generate a score analysis for this recipe.') {
      assistInstance.current?.addPromptResponse({ blocks: scoreBlocksRef.current });
      return;
    }

    if (args.prompt === 'Suggest a healthy breakfast recipe under 5 ingredients') {
      const mockRecipe = {
        title: 'Butter Toast',
        ingredients: [
          { name: 'Bread slices', quantity: '2' },
          { name: 'Butter', quantity: '1 tbsp' },
          { name: 'Sugar', quantity: '1 tsp' }
        ],
        instructions: [
          'Spread butter on bread slices',
          'Toast until golden and sprinkle sugar on top'
        ]
      };

      assistInstance.current?.addPromptResponse({
        blocks: [
          { blockType: 'text', content: '**Here is your recipe!** Feel free to edit ingredients and steps, then click **Check Recipe Score**.' },
          { blockType: 'tool', toolName: 'recipe-maker', props: mockRecipe }
        ]
      });
      return;
    }

    assistInstance.current?.addPromptResponse('For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.');
  };

  return (
    <div className="control-section">
      <div className="generative-aiassistview">
        <AIAssistViewComponent
          id="register-tool"
          ref={assistInstance}
          promptSuggestionsHeader="Suggested Prompts"
          promptSuggestions={promptSuggestions}
          enableStreaming={true}
          showClearButton={true}
          toolbarSettings={toolbarSettings}
          promptRequest={onPromptRequest}
          created={onCreated}
        />
      </div>
    </div>
  );
};

export default App;