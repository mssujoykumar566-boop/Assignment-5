 
    - 1️⃣ What is the difference between var, let, and const?
Answer:JavaScript এ var, let, এবং const দিয়ে variable declare করা হয়। কিন্তু এদের মধ্যে scope, reassign, hoisting ইত্যাদিতে পার্থক্য আছে। 
Example: a. var...
Function scoped
Re-declare করা যায়
Reassign করা যায়
Hoisting হয়

b.let...
Block scoped
Reassign করা যায়
Re-declare করা যায় না

c.const...
Block scoped
Reassign করা যায় না
Re-declare করা যায় না
declare করার সময় value দিতে হয়


    - 2️⃣ What is the spread operator (...)?
Answer:JavaScript এ Spread Operator (...) ব্যবহার করা ফলে একটা array বা object এর ভিতরের সব element আলাদা করে বের করে দেয়।
উদাহরণঃ
Array expand	...arr
Array copy	[...arr]
Array merge	[...a,...b]
Object copy	{...obj}
Function arguments	fn(...arr)

    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    Answer:JavaScript এ map(), filter(), এবং forEach() তিনটিই array এর উপর loop চালানোর জন্য ব্যবহার হয়।
    কিন্তু এদের কাজ ও return value আলাদা।
    উদাহরণঃ
    a.map()

map() নতুন array return করে।

এটা সাধারণত ব্যবহার হয় array এর data modify করার জন্য।

b.filter()

filter() condition অনুযায়ী element select করে নতুন array return করে।

c.forEach()

forEach() শুধু loop চালায়, কোনো নতুন array return করে না।

    - 4️⃣ What is an arrow function?
    Answer:Arrow Function হলো JavaScript-এর একটি short / modern way function লেখার জন্য।
এটা ES6 (ECMAScript 2015) এ এসেছে এবং সাধারণ function এর তুলনায় ছোট ও সহজ syntax ব্যবহার করে।

    - 5️⃣ What are template literals?
    Answer:Template Literals হলো JavaScript-এর একটি feature (ES6) যা দিয়ে string সহজভাবে লিখতে এবং variable বা expression string এর ভিতরে বসাতে পারা যায়।
   এতে backtick ( ) ব্যবহার করা হয়, single ' ' বা double " " quote নয়।
   Normal String আগে variable + string যোগ করতে + ব্যবহার  করতে হতো
   কিন্তু,
Template literal ব্যবহার করলে ${} দিয়ে variable বসানো যায়।

Expression ব্যবহার করে ${} এর ভিতরে calculation বা JS expression করা যায়।

Multi-line String Template literal দিয়ে multi-line string সহজে লেখা যায়।

Feature	Explanation
Backtick	` ` ব্যবহার হয়
Variable insert	${variable}
Expression	${a+b}
Multi-line	multiple line support

