import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
setCulture('ar-AE');

L10n.load({
    'ar-AE': {
        "gantt": {
            "emptyRecord": "لا سجلات لعرضها",
            "id": "هوية شخصية",
            "name": "اسم",
            "startDate": "تاريخ البدء",
            "endDate": "تاريخ الانتهاء",
            "duration": "المدة الزمنية",
            "progress": "تقدم",
            "dependency": "الاعتماد",
            "notes": "ملاحظات",
            "baselineStartDate": "تاريخ البدء الأساسي",
            "baselineEndDate": "تاريخ نهاية خط الأساس",
            "taskMode": "وضع المهام",
            "changeScheduleMode": "تغيير وضع الجدول",
            "subTasksStartDate": "تاريخ بدء المهام الفرعية",
            "subTasksEndDate": "تاريخ انتهاء المهام الفرعية",
            "scheduleStartDate": "جدولة تاريخ البدء",
            "scheduleEndDate": "تاريخ انتهاء الجدول الزمني",
            "auto": "تلقاءي",
            "manual": "كتيب",
            "type": "اكتب",
            "offset": "عوض",
            "resourceName": "مصادر",
            "resourceID": "معرف المورد",
            "day": "يوم",
            "hour": "ساعة",
            "minute": "دقيقة",
            "days": "أيام",
            "hours": "ساعات",
            "minutes": "الدقائق",
            "generalTab": "جنرال لواء",
            "customTab": "أعمدة مخصصة",
            "writeNotes": "اكتب ملاحظات",
            "addDialogTitle": "مهمة جديدة",
            "editDialogTitle": "معلومات المهمة",
            "saveButton": "حفظ",
            "add": "إضافة",
            "edit": "تعديل",
            "update": "تحديث",
            "delete": "حذف",
            "cancel": "إلغاء",
            "search": "بحث",
            "task": " مهمة",
            "tasks": " مهام",
            "zoomIn": "تكبير",
            "zoomOut": "تصغير",
            "zoomToFit": "تكبير لتناسب",
            "excelExport": "اكسل التصدير",
            "csvExport": "تصدير CSV",
            "expandAll": "توسيع الكل",
            "collapseAll": "انهيار جميع",
            "nextTimeSpan": "الجدول الزمني التالي",
            "prevTimeSpan": "الجدول الزمني السابق",
            "okText": "حسنا",
            "confirmDelete": "هل أنت متأكد أنك تريد حذف السجل؟",
            "from": "من عند",
            "to": "إلى",
            "taskLink": "رابط المهمة",
            "lag": "بطئ",
            "start": "بداية",
            "finish": "إنهاء",
            "enterValue": "أدخل القيمة",
            "taskBeforePredecessor_FS": "قمت بنقل '{0}' للبدء قبل انتهاء '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
            "taskAfterPredecessor_FS": "قمت بنقل '{0}' بعيدًا عن '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
            "taskBeforePredecessor_SS": "قمت بنقل '{0}' للبدء قبل أن يبدأ '{1}' وربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
            "taskAfterPredecessor_SS": "قمت بنقل '{0}' للبدء بعد بدء '{1}' وربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
            "taskBeforePredecessor_FF": "قمت بنقل '{0}' للإنهاء قبل انتهاء '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
            "taskAfterPredecessor_FF": "قمت بنقل '{0}' للإنهاء بعد انتهاء '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
            "taskBeforePredecessor_SF": "قمت بنقل '{0}' بعيدًا عن '{1}' لبدء التشغيل وترتبط المهمتان. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
            "taskAfterPredecessor_SF": "قمت بنقل '{0}' للإنهاء بعد بدء '{1}' وربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
            "taskInformation": "معلومات المهمة",
            "deleteTask": "حذف المهمة",
            "deleteDependency": "حذف التبعية",
            "convert": "تحويل",
            "save": "حفظ",
            "above": "في الاعلى",
            "below": "أدناه",
            "child": "طفل",
            "milestone": "معلما",
            "toTask": "لمهمة",
            "toMilestone": "إلى معلم",
            "eventMarkers": "علامات الحدث",
            "leftTaskLabel": "تسمية المهمة اليسرى",
            "rightTaskLabel": "تسمية المهمة الصحيحة",
            "timelineCell": "خلية الجدول الزمني",
            "confirmPredecessorDelete": "هل أنت متأكد أنك تريد إزالة رابط التبعية؟",
            "unit": "وحدة",
            "work": "عمل",
            "taskType": "نوع المهمة",
            "unassignedTask": "مهمة غير محددة",
            "group": "مجموعة",
            "indent": "مسافة بادئة",
            "outdent": "عفا عليها الزمن",
            "segments": "شرائح",
            "splitTask": "تقسيم المهمة",
            "mergeTask": "مهمة الدمج",
            "left": "اليسار",
            "right": "حق"
        }
    }
});

function App () {
    const taskFields = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentId'
    };
    return (
        <GanttComponent 
            dataSource={data} 
            locale='ar-AE' 
            allowSelection={true} 
            taskFields={taskFields} 
            enableRtl= {true} 
            height = '450px'
        >
        </GanttComponent>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));