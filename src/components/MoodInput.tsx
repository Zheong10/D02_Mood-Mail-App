import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


type props = {
  mood: string;
  setMood: (value: string) => void;
  onGenerate: () => void;
  disabled: boolean;
};

const MoodInput = ({ mood, setMood, onGenerate, disabled }: props) => {
  return (
    <div className="space-y-4">
      <Input
        placeholder="How are you feeling today? (happy, sad or angry)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
      />
      <Button className="w-full" onClick={onGenerate} disabled={disabled}>
        Generate MoodMail
      </Button>
    </div>
  );
};

export default MoodInput;
