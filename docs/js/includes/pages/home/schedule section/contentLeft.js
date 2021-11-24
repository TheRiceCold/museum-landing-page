import { regulationList } from './regulationList.js'

let getList = regulationList.map(i => '<li>'+i+'</li>').join('')

export const contentLeft = () =>
`<ul>
  <i class="fa fa-ticket"></i>
    ${getList}
  <button>schedule your visit</button>
</ul>`


