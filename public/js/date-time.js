
function initializeDateTimeUtil(){
    let today = new Date();
    document.getElementById('src-dt-mon').value = today.getMonth() + 1;
    document.getElementById('src-dt-date').value = today.getDate();
    document.getElementById('src-dt-year').value = today.getFullYear();
}
initializeDateTimeUtil();
function calculateNewDateTime(){
    let srcMon = document.getElementById('src-dt-mon').value;
    let srcDate = document.getElementById('src-dt-date').value;
    let srcYear = document.getElementById('src-dt-year').value;
    let add_sub_date = document.getElementById('add-sub-date').checked;
    let monthToCalculate = document.getElementById('update-dt-mon').value
    monthToCalculate = (monthToCalculate)?parseInt(monthToCalculate):0;
    let dateToCalculate = document.getElementById('update-dt-date').value
    dateToCalculate = (dateToCalculate)?parseInt(dateToCalculate):0;
    let yearToCalculate = document.getElementById('update-dt-year').value
    yearToCalculate = (yearToCalculate)?parseInt(yearToCalculate):0;
    let destMon = document.getElementById('dest-dt-mon');
    let destDate = document.getElementById('dest-dt-date');
    let destYear = document.getElementById('dest-dt-year');
    if(srcMon&&srcDate&&srcYear){
        let d = new Date(srcYear+'-'+srcMon+'-'+srcDate);
        console.log(d)
        if(add_sub_date){
            d.setMonth(d.getMonth()-monthToCalculate);
            d.setDate(d.getDate()-dateToCalculate);
            d.setFullYear(d.getFullYear()-yearToCalculate);
        }else{
            d.setMonth(d.getMonth()+monthToCalculate);
            d.setDate(d.getDate()+dateToCalculate);
            d.setFullYear(d.getFullYear()+yearToCalculate);
        }
        destMon.value = d.getMonth()+1;
        destDate.value = d.getDate();
        destYear.value = d.getFullYear()
    }else{
        alert('Please enter a valid source date');
    }
   
}
function time(){
    let dateTimeSpan = document.getElementById('current-time-live') ;
    dateTimeSpan.innerText = new Date();   
}
setInterval(time, 1000);

/*JSON Formatter*/
function formatJSON(){
    try{
    let sourceDocument = document.getElementById('json-formatter-src').value;
    if(typeof(sourceDocument) == 'string'){
        sourceDocument = JSON.parse(sourceDocument)
    }
    document.getElementById('json-formatter-result').value = JSON.stringify(sourceDocument,null,2)
}catch(e){
    alert('The input is not a valid JSON.')
}
}