const res=document.getElementById('res');
function run(){
  const txt=document.getElementById('input').value||'';
  res.innerText='Processed lines: '+txt.split('\n').length;
}