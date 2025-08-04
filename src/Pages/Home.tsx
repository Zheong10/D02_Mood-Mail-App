import MoodInput from "@/components/MoodInput";
import MoodOutput from "@/components/MoodOutput";
import { useState } from "react";

const Home = () => {
  // Placeholder for state management if needed
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">MoodMail Generator</h2>

      <MoodInput
        mood={mood}
        setMood={setMood}
        // Placeholder for onGenerate function
        // handleGenerate function can be defined to set subject and footer based on mood
        onGenerate={() => {
          if (mood.toLowerCase() === "happy") {
            setSubject("Your Happy Mood Mail");
            setFooter("Stay happy and keep smiling!");
          } else if (mood.toLowerCase() === "sad") {
            setSubject("Your Sad Mood Mail");
            setFooter("It's okay to feel sad sometimes.");
          } else if (mood.toLowerCase() === "angry") {
            setSubject("Your Angry Mood Mail");
            setFooter("Take a deep breath, it will pass.");
          } else {
            setSubject("Mood not recognized");
            setFooter("Please enter a valid mood (happy, sad, angry).");
          }
          setGenerated(false);
        }}
        disabled={generated}
      />
      <MoodOutput
        subject={subject}
        footer={footer}
        onReset={() => {
          setMood("");
          setSubject("");
          setFooter("");
          setGenerated(false);
        }}
      />
    </div>
  );
};

export default Home;
