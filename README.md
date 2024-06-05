# BiteSpeed Frontend Task: Chatbot Flow Builder

## Overview

In this task, we will build a simple Chatbot flow builder using React, ensuring the code is extensible to easily add new features in the future. A chatbot flow is created by connecting multiple messages together to define the order of execution.

## Features

1. **Text Node**
    - Our flow builder currently supports only one type of message: Text Message.
    - There can be multiple Text Nodes in one flow.
    - Nodes are added to the flow by dragging and dropping a Node from the Nodes Panel.
  
2. **Nodes Panel**
    - This panel houses all kinds of Nodes that our Chatbot Flow Builder supports.
    - Currently, there is only a Message Node, but we will be adding more types of Nodes in the future, so make this section extensible.

3. **Edge**
    - Connects two Nodes together.

4. **Source Handle**
    - The source of a connecting edge.
    - Can only have **one edge** originating from a source handle.

5. **Target Handle**
    - The target of a connecting edge.
    - Can have **more than one edge** connecting to a target handle.

6. **Settings Panel**
    - The Settings Panel will replace the Nodes Panel when a Node is selected.
    - It has a text field to edit the text of the selected Text Node.

7. **Save Button**
    - A button to save the flow.
    - Pressing the Save button will show an error if there are more than one Nodes and more than one Node has empty target handles.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/chatbot-flow-builder.git
    cd chatbot-flow-builder
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the development server:
    ```sh
    npm start
    ```


## Usage

1. **Drag and Drop Nodes:** Drag nodes from the Nodes Panel and drop them onto the flow canvas.
2. **Connect Nodes:** Use the Source Handle to draw edges to the Target Handle of another node.
3. **Edit Node Text:** Select a node to open the Settings Panel and edit the node's text.
4. **Save Flow:** Click the Save button to save the flow. Ensure all nodes have valid connections, or an error will be displayed.

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
