import { Client, Element, RawResult } from 'webdriverio';

import { CompletedPage } from '../completed/completed.page';

export class ToDoPage {

    private privateNewTodo = 'input[class=new-todo]';
    private todoList = 'ul.todo-list li';
    private lastTodo = 'ul.todo-list li:last-child';
    private navigationLink = 'ul.filters li a=Completed'

    get todoInput() : Client<RawResult<Element>> {
        return browser.$(this.privateNewTodo);
    }

    get todoListLength() : number {
        return browser.$$(this.todoList).length;
    }

    public addToDo(todo): void {
        this.todoInput.setValue(todo);
        browser.keys('\uE007');
    }

    public navigate(): void {
        browser.windowHandleMaximize();
        browser.url('/');
    }

    public completeLastTodo(): void {
        browser.$(this.lastTodo).click();
    }

    public navigateToCompleted(): CompletedPage {
        browser.$(this.navigationLink).click();
        return new CompletedPage();
    }
}
