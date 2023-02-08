import { firtsCardtodo } from "../../data/todoCardsData.js";

export const todoCard = `<div class="card mb-5" style="width: 18rem;">
<div class="${firtsCardtodo.urgent ? `bg-danger` : ``}">
    <div class="mb-3">
    <h3>${firtsCardtodo.title}</h3>
    </div>
    <div class="mb-3">
    <p>${firtsCardtodo.date}</p>
    </div>
    <div class="mb-3">
    <p>${firtsCardtodo.description}</p>
    </div>
    <div class="mb-3">
        <div class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger">URGENTE</button>
            <button type="button" class="btn btn-success">Hecho</button>
        </div>
    </div>
</div>
</div>`;
