/**
 * 자동보고를 켭니다.
 * 트리거 시간 설정 https://developers.google.com/apps-script/reference/script/clock-trigger-builder#athourhour
 */
function enableAutoreport() {
  var triggers = ScriptApp.getProjectTriggers();
  //트리거 설정
  if (triggers.length==0) {
    ScriptApp.newTrigger(reportDevinf.name)
      .timeBased()
      //오전 6시 실행(+/- 15분)
      .atHour(6)
      //매일
      .everyDays(1)
      .create();
   Logger.log('자동보고 켜짐');
   SpreadsheetApp.getUi().alert('자동보고가 켜졌습니다.');
  }
  else {
    SpreadsheetApp.getUi().alert('자동보고가 이미 켜져있습니다.');
  }
}

/**
 * 자동보고를 끕니다. (모든 trigger를 삭제합니다.)
 */
function disableAutoreport() {
  var triggers = ScriptApp.getProjectTriggers();
  if (triggers.length==0){
    SpreadsheetApp.getUi().alert('이미 꺼진 상태입니다.');
  }
  else {
    for (var i = 0; i<triggers.length; i++) {
      ScriptApp.deleteTrigger(triggers[i])
    }
    Logger.log('자동보고 꺼짐')
    SpreadsheetApp.getUi().alert('자동보고가 꺼졌습니다.');
  }
}
