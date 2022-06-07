import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold'>Welcome to my Fantastic Blogs</h1>
            <div>
                <h3 className='text-3xl font-semibold p-3'>
                    What is context API?
                </h3>
                <p>
                Context provides a way to pass data through the component tree without having to pass props down manually at every level.Suppose we have a App component that have several component A,B,C also B has a child component D same way C has a component E and E has F .We want to pass username that is props to the D or F component then we normally pass it through step by step to reach the props in F component .But in Context API it makes us easy to props data to the child component we want to pass it.It doesn't need to pass manually from parent data to child data.We can now sent data exactly to the child without passing it manually by the help of context API.The main point is to avoid props drilling we use Context API 
                </p>
                <h3 className='text-3xl font-semibold p-3'>
                    What is inline,block and inline-block elements?
                </h3>
                <div>
                <p>
                Block: Block element is the css display property which take the full width of the display .That is it take 100% width.Eg. div is a Block element.<br></br>
                Inline: The element doesn't start on a new line and only occupy just te width it requires .We can't set the width or height. eg: span , strong, and img tags are inline elements.<br></br>
                Inline-Block: It's formatted just like the inline element.Where it doesn't start on a new line.But we can set width and height .<br></br>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;