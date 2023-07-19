Hints for this Scrim:

1. For this scrim we need to store a const as a boolean. For example if something is
`true`, we would need to capture that and save it so we can use it later.

An example of this would be:

const animals =['cat', 'dog', 'parrot']

const hasCat = animals.includes('cat') // hasCat would be 'true' on this occasion.


We can do so in a number of different ways. So another example would be:

const isFriday = firstLetter === 'F' // isFriday would be 'true' on this occasion.



2. We can use booleans to show Components. For example, I can make a Component show
conditionally like so:

class Main extends React.Component {

  const isLoggedIn = true
    
  render() {
    return (
      <>
        <StyledSection>
          {isLoggedIn && <BankDetails>My Secret Bank Details here.</BankDetails>}
        </StyledSection>
      </>
    );
  }
}

In the example above, the user will only see the <BankDetails/> Component if 
`isLoggedIn` is `true`. Dont forget to use the `&&` for this to work.

