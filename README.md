1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: The differences is given below:

#getElementById - We only use this when we need an exact element to find from the whole html code. As we know that 'id' is unique. The "getElementById" itself is singular because it has 'Element' in it. getElementById returns only a single elemnent because 'id' is unique.

Example: If I say find me the 
<section id="all-tab-section">
<h1></h1>
<p></p>
</section>
it will only give me the 'all-tab-section' added Section and what's in between. 'id' is kind of a classroom in a school.

#getElementsByClassName - This includes every single element who has the same name (such as "text"). Because, class is so many and not unique as id. Even the name 'getElementsByClassName' itself is plural cause it has 'Elements' in itself. Because, class is not certain. Class can be anywhere in in any elements.

Example: If I say find me the 
<section>
<h1 class="text"></h1>
<p class="text"></p>
<img src="" alt="" class="text">
</section>
it will give me the h1, p and img elements at the same time.'class' is kind of a bunch of student who wears the same dresses in that classroom in a school.

#querySelector - As we know 'querySelector' is a CSS selector. If we use this 'querySelector' it will selects the first element that matches a CSS selector.
It doesn't matter how you write (id, class or tag) in CSS it can be use that way.

Example:
<p class="text">MOJO</p>
<p class="text">Cheer UP</p>
<p class="text">Uro Cola</p>

If I write document.querySelector('text'); is js file. It will only select the first paragraph. That's mean MOJO.

#querySelectorAll - 'querySelectorAll' is also a CSS selector. But, it selects all matching elements. Like, it will provide you all the elements which have included class="text" attributes. Let's have a look at the example.

Example:
<p class="text">MOJO</p>
<p class="text">Cheer UP</p>
<p class="text">Uro Cola</p>

If I write document.querySelectorALL('text'); is js file. It will select all the three paragraphs. That's mean MOJO, Cheer UP and Uro Cola at the same time.


If I explain all the differences between this four in one sentence, that would be:
- getElementById: only one single (unique) element using 'id'
- getElementsByClassName: many elements using 'class'
- querySelector: the very first element using CSS selector
- querySelectorAll: all elements that matches using CSS selector



2. How do you create and insert a new element into the DOM?

Answer: I can create and insert a new element into the DOM in three steps:
- first, create an element.
- second, add text/content in that using innerText/innerHtml.
- third, append the text/content into the dom

Let's have a look on the example given below:

- first, create an element. example:
    const newText = document.createElement ("p");

- second, add text/content in that using innerText/innerHtml. example:
    newText.innerText = "Hello! I am Learning JavaScript.";

- third, append the text/content into the dom. example:
    document.body.appendChild(newText);

And, If I combined it together then will looks like below:
    const newText = document.createElement ("p");
    newText.innerText = "Hello! I am Learning JavaScript.";
    document.body.appendChild(newText);

Here,
    createElement -> Creates a new element.
    innerText/innerHtml -> Provide the content/text.
    appendChild() -> It insert to the DOM or add to the page.



3. What is Event Bubbling? And how does it work?

Answer:
Event Bubbling: Event Bubble is such a process where if an events happens on an element, that event propagate upward step by step to his parent -> grandparent -> document.
In simple words, "The events starts from the bottom and moves up."

Example: Let, in html:

<div id="parent">
    <button id="child">Click Me</button>
</div>

Now, If I click the button, this will happens:
step-1: First, the button(child) event will run.
step-2: Then, div(parent) event will run.
step-3: After that it will  go up to the element above.

This is how event bubble will rise up.




4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event delegation: This is such a technique where instead os assigning separate events to many child elements, a single event listner is assigned to their parent element.
Because, through event bubbling, the child's event reaches the parent. That means, the parent handles the event for the child.

Example: Let, there are many buttons:

<div id="parent">
<button>ONE</button>
<button>TWO</button>
<button>THREE</button>
</div>

Instead of providing every button a lisner, just provide a listener to the parent.
Now, if i click the button it will get back to the parent as event bubble.

This is why it is useful:
- Have to write less code.
- Better Performance.
- Events will still works after adding new elements.

In simple words, "A manager is handling everyone, no supervisor needed."




5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: The differences between preventDefault() and stopPropagation() methods are given below:

preventDefault(): preventDefault() stops the default behavior of the element.

Example: When a form is submitted, the page reloads to stop it. That means stope the browser's default behaviour.

stopPropagation(): stopPropagation() stops the event from bubbling to the parent. That means the event will not go to the element above it.

In one sentence. the differnece between these two are:
- preventDefault() stops the default action of a browser.
- stopPropagation() stops the event from bubbling.