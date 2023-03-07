import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";


const clerkPubKey = import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (

    <ClerkProvider publishableKey={"pk_test_Zmxvd2luZy1ob3JuZXQtOC5jbGVyay5hY2NvdW50cy5kZXYk"}>
      <SignedIn>
        <Hello />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

    </ClerkProvider>


  )
}

function Hello() {

  const { user } = useUser();
  
  return (
    <div className="App">
      <UserButton />
      {user ? <h1 className="text-3xl font-bold underline">Hello, {user.firstName}!</h1> : null}
    </div>);
}

export default App
