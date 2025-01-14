import { Box, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg='white' borderRadius="lg" >
     
      <Image src={imageSrc} borderRadius="lg" />

      <div style={{ padding: 20 }}>
        <Box p={2}>
          <Heading as='h4' color='black' fontSize='md'>
            {title}
          </Heading>
        </Box>
        <Box p={2}>
          <Text color="grey">{description}</Text>
        </Box>
        <Box p={2}>
          <a href='/'>
            <Text color='black' fontSize='sm'>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
          </a>
        </Box>
        
      </div>
    </VStack>)
  
};

export default Card;
