function display(val){
    document.getElementById('textarea').value+=val;
}
function clr()
{
    document.getElementById('textarea').value="";
}
function sol()
{
    let x=document.getElementById('textarea').value;
    let y=eval(x);
    document.getElementById('textarea').value=y;
}