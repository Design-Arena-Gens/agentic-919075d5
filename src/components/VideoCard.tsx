import Image from 'next/image';
import styles from './VideoCard.module.css';
import type { Video } from '@lib/channel-data';

type Props = {
  video: Video;
};

export function VideoCard({ video }: Props) {
  return (
    <article className={`${styles.card} surface`}>
      <div className={styles.thumbnailWrapper}>
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
        />
        <span className={styles.duration}>{video.duration}</span>
      </div>
      <div className={styles.meta}>
        <h3>{video.title}</h3>
        <p className={styles.description}>{video.description}</p>
        <div className={styles.tags}>
          {video.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.footer}>
          <span>{video.views}</span>
          <span>•</span>
          <span>{video.publishedAt}</span>
        </div>
      </div>
    </article>
  );
}
