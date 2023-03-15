var form = document.getElementById('form');
var add = document.getElementById('add');



add.addEventListener('click', additems);

function additems(e)
{
    e.preventDefault();

    var exptype = document.getElementById('exptype').value ;

    var li = document.createElement('li');
    li.className = 'newadd';

    li.appendChild(document.createTextNode(exptype));
}