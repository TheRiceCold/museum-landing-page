import { regulationList } from './regulationList.js'

export const contentLeft = () =>
`<ul>
  <i class="fa fa-ticket"></i>
    <li>${regulationList[0]}</li>
    <li>${regulationList[2]}</li>
    <li>${regulationList[3]}</li>
    <li>${regulationList[4]}</li>
    <li>${regulationList[5]}</li>
    <li>${regulationList[6]}</li>
  <button>schedule your visit</button>
</ul>`


