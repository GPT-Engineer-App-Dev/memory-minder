import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Box, Text, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    if (noteText.trim() !== "") {
      setNotes([...notes, noteText]);
      setNoteText("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input
            placeholder="Enter your note here..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <Button onClick={addNote} colorScheme="teal">
            Add Note
          </Button>
        </HStack>
        <VStack spacing={4} width="100%">
          {notes.map((note, index) => (
            <HStack key={index} width="100%" p={4} borderWidth={1} borderRadius="md" justifyContent="space-between">
              <Text>{note}</Text>
              <IconButton
                aria-label="Delete note"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteNote(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;