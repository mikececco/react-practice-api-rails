import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import  SimpleMike from './components/ui/Mike';
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";
import  ProfileForm from './components/ui/FormMike';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import ButtonUsage from "./components/ui/ButtonMUI";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";


function App() {
  const [count, setCount] = useState(0);
  const [serverUrl, setServerUrl] = useState('http://127.0.0.1:3000');
  const [responseCode, setResponseCode] = useState(404); // State to hold the response code
  const [showAlert, setShowAlert] = useState(false); // State to control the alert visibility

  // useEffect(() => {
  //   fetchData();
  // }, []); // Empty dependency array to run once on component mount

  useEffect(() => {
    if (responseCode !== 404) {
      setShowAlert(true); // Show the alert only if responseCode is not 404

      // Set a timeout to hide the alert after 5 seconds (adjust as needed)
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000); // 5000 milliseconds = 5 seconds

      // Cleanup function to clear the timeout when component unmounts or responseCode changes
      return () => clearTimeout(timeout);
    }
  }, [responseCode]); // Run effect when responseCode changes



  const fetchData = async () => {
    try {
      const response = await fetch(serverUrl);
      const data = await response.status;
      console.log(data);
      setResponseCode(data); // Set the response code state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick = () => {
    fetchData(); // Call fetchData when the button is clicked
    setCount(count + 1); // Increment count
  };

  // const rootInformationContacts = responseCode.map((contact, index) => {
  //   return <Contact key={index} contact={contact} />
  // });

  const { handleSubmit, control } = useForm();

  const [formDataList, setFormDataList] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleFormSubmit = (data) => {
    setFormDataList([...formDataList, data]);
    setShowTable(true);
  };

  return (
    <>
      <SimpleMike job="developer" name="Cecconello">
        Hello from children
      </SimpleMike>

      <ButtonUsage onSubmit={handleFormSubmit}/>

      {showTable && (
        <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead className="text-right">Something</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formDataList.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">Today</TableCell>
                <TableCell className="text-right">{data.something}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      )}



      {/* <Form className="space-y-8">
        <FormField
          control={control}
          name="username"

          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </Form> */}


      {/* <ProfileForm /> */}

      {/* {rootInformationContacts} */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How to check server content</AccordionTrigger>
          <AccordionContent>
            You can check it by clicking here below
            <br />
            <Button onClick={handleButtonClick}>Update server status</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p>RESPONSE CODE SERVER: {responseCode}</p>
      <p>Clicks {count}</p>

      <p>{showAlert}</p>


      <AlertDialog>
        <AlertDialogTrigger>Actions</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleButtonClick}>Check server status</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {showAlert && (
        <Alert>
          <AlertTitle>Status updated</AlertTitle>
          <AlertDescription>
            Check new status.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}

export default App;
