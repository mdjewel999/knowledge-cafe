import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Qustion = () => {
  return (
    <div className="container">
      <div>
        <Card>
          <Card.Body>
            <Card.Title>1.Difference between props and state ? </Card.Title>
            <Card.Text>
              In React, both props and state are used to manage data in a
              component, but they serve different purposes. Props short for
              properties are read-only data that are passed to a component from
              its parent component. They are used to configure and customize a
              component. When a parent component passes props to its child
              component, those props are available as a parameter in the child
              component's function definition. Props cannot be modified within
              the component, they are fixed and cannot change during the
              component's life cycle. On the other hand, state is a mutable data
              that are managed within a component. It represents the internal
              state of a component and can change during the component's life
              cycle. State can only be changed using the setState() function,
              which is provided by React and should be used to update the state
              in a way that React can properly manage.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>

      <div>
        <Card>
          <Card.Body>
            <Card.Title>2. How Does React work? </Card.Title>
            <Card.Text>
              React uses a virtual DOM to efficiently render changes to the UI.
              When a component's state or props change, React creates a new
              virtual DOM tree, compares it with the previous tree, and
              calculates the minimum number of changes required to update the
              actual DOM. Then it updates the actual DOM with the changes. React
              also provides features for managing state, handling events, and
              working with server-side data.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>3. How does useState work? </Card.Title>
            <Card.Text>
              useState is React Hook that allows you to add state to a
              functional component. It returns an array with two values: the
              current state and a function to update it. The Hook takes an
              initial state value as an argument and returns an updated state
              value whenever the setter function is called. Every time your
              component renders, useState gives you an array containing two
              values: The state variable counter with the value you stored.
              The state setter function setCounter which can update the state
              variable and trigger React to render the component again.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>4. Purpose of useEffect other than fetching data ? </Card.Title>
            <Card.Text>
              The useEffect hook in React is used for performing side effects in
              function components. This includes not only fetching data, but
              also other actions such as setting up event listeners, updating
              the document title, or managing animations. It allows you to run
              code after the component has rendered or when certain dependencies
              have changed, and is useful for integrating with external
              libraries or managing complex state in your application.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Qustion;
