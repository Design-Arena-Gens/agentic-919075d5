import { videos } from '@lib/channel-data';
import { VideoCard } from './VideoCard';
import styles from './VideoGrid.module.css';

export function VideoGrid() {
  return (
    <section>
      <div className={styles.header}>
        <div>
          <span className="chip">Latest Uploads</span>
          <h2>Fresh from the studio</h2>
        </div>
        <a href="https://youtube.com" className={styles.link}>
          View full playlist →
        </a>
      </div>
      <div className="card-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
