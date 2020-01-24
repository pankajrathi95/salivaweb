import React from "react";
import { Button } from "rebass";
import { Heading, Text } from "rebass";
import { Input } from "@rebass/forms";
import { Flex, Box } from "reflexbox";

class Drug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Flex flexWrap="wrap" mx={80} my={50} border="1">
        <Box my={10} px={3} py={3} width={13 / 16} sx={{}}>
          <Button
            backgroundColor="red"
            onClick={() => {
              this.props.history.push("/drug/new");
            }}
          >
            New Drug
          </Button>
        </Box>
        <Box px={1} py={3} width={1 / 8} sx={{}}>
          <Input type="text" name="search" placeholder="search" />
        </Box>
        <Box py={3} width={1 / 16}>
          <Button backgroundColor="red">Search</Button>
        </Box>

        <Flex width={1} sx={{ "border-bottom": "1px solid black" }}>
          <Box px={2} py={2} width={1 / 2}>
            <Text p={1} color="background">
              1/2
            </Text>
          </Box>
          <Box px={5} py={2} width={1 / 4}>
            <Button backgroundColor="#007bff">Edit</Button>
          </Box>
          <Box px={2} py={2} width={1 / 4}>
            <Button backgroundColor="red">Delete</Button>
          </Box>
        </Flex>

        <Flex width={1} sx={{ "border-bottom": "1px solid black" }}>
          <Box px={2} py={2} width={1 / 2}>
            <Text p={1} color="background">
              1/2
            </Text>
          </Box>
          <Box px={5} py={2} width={1 / 4}>
            <Text p={1} color="background">
              1/4
            </Text>
          </Box>
          <Box px={2} py={2} width={1 / 4}>
            <Text p={1} color="background">
              1/4
            </Text>
          </Box>
        </Flex>
      </Flex>
    );
  }
}
export default Drug;
