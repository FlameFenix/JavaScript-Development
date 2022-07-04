function generateReport() {
    let employeeElements = document.getElementsByName('employee')[0].checked;
    let deparmentElements = document.getElementsByName('deparment')[0].checked;
    let statusElements = document.getElementsByName('status')[0].checked;
    let dateHiredElements = document.getElementsByName('dateHired')[0].checked;
    let benefitsElements = document.getElementsByName('benefits')[0].checked;
    let salaryElements = document.getElementsByName('salary')[0].checked;
    let ratingsElements = document.getElementsByName('rating')[0].checked;

    let rowsInfo = Array.from(document.getElementsByTagName('tbody tr'));
    rowsInfo.forEach(element => {
        console.log(element.textContent);
    });
    //TODO
}