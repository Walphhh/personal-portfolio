import { TagTypes } from "@/projects";
import { Badge } from "../ui/badge";
interface tags {
  tags: TagTypes[];
}

const DisplayTags = ({ tags }: tags) => {
  return (
    <div className="flex-wrap space-x-1">
      {tags.map((tag) => {
        return <Badge variant={"secondary"}>{tag}</Badge>;
      })}
    </div>
  );
};

export default DisplayTags;
