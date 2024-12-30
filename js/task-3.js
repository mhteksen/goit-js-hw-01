   
function getElementWidth(content,padding,border){
  
    let contents = parseFloat(content);
    let paddings = parseFloat(padding);
    let borders = parseFloat(border);

    let total = contents + 2 * paddings + 2 * borders;
    
    return (total);

}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

