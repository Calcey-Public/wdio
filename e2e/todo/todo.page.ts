import { Client, Element, RawResult } from 'webdriverio';

import { CompletedPage } from '../completed/completed.page';

export class ToDoPage {

    private NewTodo = 'input[class=new-todo]';
    private todoList = 'ul.todo-list li';
    private firstTodo = 'ul.todo-list li:first-child input';
    private navigationLink = 'a[href=\'#/completed\']';

    get todoInput() : Client<RawResult<Element>> {
        return browser.$(this.NewTodo);
    }

    get todoListLength() : number {
        return browser.$$(this.todoList).length;
    }

    public addToDo(todo): void {
        this.todoInput.waitForVisible();
        this.todoInput.setValue(todo);
        browser.keys('\uE007');
    }

    public navigate(): void {
        browser.windowHandleMaximize();
        browser.url('/examples/react/#/');
    }

    public completeLastTodo(): void {
        var lastTodo = browser.$(this.firstTodo).click();
    }

    public navigateToCompleted(): CompletedPage {
        browser.$(this.navigationLink).click();
        return new CompletedPage();
    }
}
