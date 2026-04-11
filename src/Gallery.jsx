import Profile from "./Profile";

export default function Gallery() {
  return (
    <div>
        <Profile 
        name='Maria Skłodowska-Curie' 
        profession='physicist and chemist' 
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
        discovered='polonium (chemical element)'
        imgCode='szV5sdG'
        />
         <Profile 
        name='Katsuko Saruhashi' 
        profession='geochemist' 
         awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
        discovered='a method for measuring carbon dioxide in seawater'
        imgCode='YfeOqp2'
        />
    </div>  
  )
}