import React from "react";
import { Button } from "rebass";
import { Heading, Text } from "rebass";
import { Input } from "@rebass/forms";
import { Flex, Box } from "reflexbox";
import MyEditor from "./MyEditor";
import "./../css/MyEditor.css";
import Draft, { convertFromRaw, convertFromHTML } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import ReacthtmlParser from "react-html-parser";
const { Editor, EditorState, convertToRaw } = Draft;
class NewDrug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      EditorState1: EditorState.createEmpty(),
      drugName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }
  handleChange(editorState) {
    this.setState({
      editorState,
      editorContentHtml: stateToHTML(editorState.getCurrentContent())
    });
  }

  handleChange1(editorState1) {
    this.setState({
      editorState1,
      editorContentHtml1: stateToHTML(editorState1.getCurrentContent())
    });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { drugName } = this.state;
    return (
      <Flex flexWrap="wrap" mx={80} my={50} border="1">
        <Box my={10} px={3} py={3} width={1} sx={{ "text-align": "center" }}>
          <Heading fontSize={6}>Add New Drug</Heading>
        </Box>
        <Box px={1} py={3} width={1 / 4}>
          <Text>Name:</Text>
        </Box>
        <Box py={3} width={3 / 4}>
          <Input
            type="text"
            name="drugName"
            value={drugName}
            onChange={this.handleInputChange}
            marginTop="10px"
          />
        </Box>
        <Box px={1} py={3} width={1 / 4}>
          <Text>Name:</Text>
        </Box>
        <Box py={3} width={3 / 4}>
          <MyEditor handleChange={this.handleChange} />
        </Box>

        <Box px={1} py={3} width={1 / 4}>
          <Text>Name:</Text>
        </Box>
        <Box py={3} width={3 / 4}>
          <MyEditor handleChange={this.handleChange1} />
        </Box>
      </Flex>
    );
  }
}
export default NewDrug;
