import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';



const database = 
  [
    {
      "title": "Food in prison",
      "details": "Gruel sandwiches. Gruel omelets. Nothing but gruel. Plus, you can eat your own hair.",
      "person": "prisonMike",
      "createdAt": "2021-09-04T15:25:33.006Z",
      "id": 3
    },
    {
      "title": "Chilli recipe",
      "details": "At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know each other in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.\"",
      "person": "kevinMalone",
      "createdAt": "2021-09-04T12:25:33.006Z",
      "id": 4
    },
    {
      "title": "The Scarn",
      "details": "You jump to the right and you shake a hand\nThen you jumpy to the left and you shake that hand\nMeet new friends\nTie some yarn\nAnd that’s how you do the Scarn",
      "person": "michaelScarn",
      "createdAt": "2021-09-02T15:25:33.006Z",
      "id": 5
    },
    {
      "title": "Heroes",
      "details": "No, don’t call me a hero. Do you know who the real heroes are? The guys who wake up every morning and go into their normal jobs and get a distress call from the Commissioner and take off their glasses and change into capes and fly around fighting crime. Those are the real heroes.",
      "person": "dwightSchrute",
      "createdAt": "2021-08-04T15:25:33.006Z",
      "id": 6
    },
    {
      "title": "Pregnancy",
      "details": "I do not like pregnant women in my workspace. They’re always complaining. I have varicose veins, too. I have swollen ankles. I’m constantly hungry. Do you think my nipples don’t get sore too? Do you think I don’t need to know the fastest way to the hospital?",
      "person": "stanleyHudson",
      "createdAt": "2021-08-04T15:25:33.006Z",
      "id": 7
    },
    {
      "title": "Thoughts on friends...",
      "details": "I have six roommates, which are better than friends because they have to give you one month's notice before they leave.",
      "person": "tobyFlenderson",
      "createdAt": "2021-09-02T15:25:33.006Z",
      "id": 8
    },
    {
      "title": "Talking smack",
      "details": "I don’t talk trash, I talk smack. They’re totally different. Trash talk is all hypothetical, like: ‘Your mom is so fat she can eat the Internet.’ But smack talk is happening like right now, like: ‘You’re ugly and I know it for a fact ’cause I got the evidence right there",
      "person": "kellyKapoor",
      "createdAt": "2021-09-01T15:25:33.006Z",
      "id": 9
    },
    {
      "title": "Oops!...I Did It Again.",
      "details": "It's Britney b*tch!",
      "person": "michaelScott",
      "createdAt": "2021-09-01T15:25:33.006Z",
      "id": 10
    },
    {
      "title": "Bros before hoes. Why?",
      "details": "Because your bros are always there for you. They got your back after your ho rips your heart out for no good reason. And you were nothing but great to your ho, and you told her that she was the only ho for you. And that she was better than all the other hoes in the world. And then suddenly... she's not yo' ho no mo'.",
      "person": "michaelScott",
      "createdAt": "2021-09-02T15:25:33.006Z",
      "id": 11
    },
    {
      "title": "Prison is no joke",
      "details": "The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they’d come down and they’d suck the soul out of your body and it hurt!",
      "person": "prisonMike",
      "createdAt": "2021-09-03T15:25:33.006Z",
      "id": 12
    },
    {
      "title": "Why is this so hard?",
      "details": "That's what she said",
      "person": "michaelScott",
      "createdAt": "2021-09-01T15:25:33.006Z",
      "id": 13
    },
    {
      "title": "What is the most important thing for a company? Is it the cash flow? Is it the inventory?",
      "details": "Nuh-uh. It’s the people. The people. My proudest moment here was not when I increased profits by 17%, or when I cut expenses without losing a single employee. No, no, no, no, no. It was a young Guatamalan guy. First job in the country, barely spoke English. Came to me and said, “Mr. Scott, would you be the godfather of my child?” Wow. Wow. Wow. Didn’t work out in the end. We had to let him go. He sucked",
      "person": "michaelScott",
      "createdAt": "2021-08-30T15:25:33.006Z",
      "id": 14
    },
    {
      "title": "The Dundies!",
      "details": "The Dundies are kind of like a kid's birthday party, and you go, and there's really nothing for you to do there, but the kid's having a really good time, so you're, you're kinda there, that's...that's kinda what it's like.",
      "person": "oscarMartinez",
      "createdAt": "2021-09-04T15:25:33.006Z",
      "id": 15
    }
  ]




export default function Notes() {

  const [ notes, setNotes ] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8000/notes?_sort=createdAt&_order=desc')
  //     .then(res => res.json())
  //     .then(data => setNotes(data))
  // }, [])
  useEffect(() => {
    setNotes(database)
  }, [])

  // const handleDelete = async (id) => {
  //   await fetch('http://localhost:8000/notes/' + id, {
  //     method: 'DELETE'
  //   });

  //   const newNotes = notes.filter(note => note.id !== id);
  //   setNotes(newNotes);
  // };
  const handleDelete = async (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    
    <Container>
      <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
      >
        {notes.map(note => (
          <div key={note.id} xm={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
