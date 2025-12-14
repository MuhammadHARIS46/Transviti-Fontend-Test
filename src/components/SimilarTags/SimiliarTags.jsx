import "./SimilarTags.css";
import Tag from "../common/Tag/Tag";

const SimilarTags = ({ tags = [], onTagClick,activeTag }) => {
  return (
    <div className="similar-tags">
      <span className="similar-label">Similar:</span>

      <div className="tags-wrapper">
        {tags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            onClick={() => onTagClick?.(tag)}
            active={activeTag === tag}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarTags;
