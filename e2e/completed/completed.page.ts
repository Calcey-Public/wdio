import { ToDoPage } from "../todo/todo.page";

export class CompletedPage {

    private todoList = 'ul.todo-list li';
    private navigateToDoLink = 'ul.filters li a=All';

    get todoListLength() : number {
        return browser.$$(this.todoList).length;
    }

    public navigateToToDoList(): ToDoPage {
        browser.$(this.navigateToDoLink).click();
        return new ToDoPage();
    }
}