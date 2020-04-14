import React from 'react'

export default function MainNavList({product,listofsubproducts,copysubproducttoitems}) {
    return (
    <li class="main-nav-list"><a data-toggle="collapse" href={"#"+product} aria-expanded="false" aria-controls={product}>
        <span class="lnr lnr-arrow-right"></span>{product}<span class="number">(53)</span></a>
        <ul class="collapse" id={product} data-toggle="collapse" aria-expanded="false" aria-controls={product}>
            {
                listofsubproducts.map(subproduct=><SubNav type={subproduct.type} count={subproduct.count} copysubproducttoitems={copysubproducttoitems}/>)
            }
        </ul>
    </li>
    )
}

function SubNav({type,count,copysubproducttoitems}) {
    return (
        <li onClick={()=>copysubproducttoitems(type)} class="main-nav-list child"><a href="#">{type}<span class="number">({count})</span></a></li>
    );
}
