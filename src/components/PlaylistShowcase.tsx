import Image from 'next/image';
import { playlists } from '@lib/channel-data';
import styles from './PlaylistShowcase.module.css';

export function PlaylistShowcase() {
  return (
    <section>
      <div className={styles.header}>
        <span className="chip">Playlists</span>
        <h2>Curated learning paths</h2>
        <p>Start with the foundations or dive into advanced workflows with dedicated series.</p>
      </div>
      <div className={styles.grid}>
        {playlists.map((playlist) => (
          <article key={playlist.id} className={`${styles.card} surface`}>
            <div className={styles.cover}>
              <Image
                src={playlist.cover}
                alt={playlist.title}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <span className={styles.count}>{playlist.videos} videos</span>
            </div>
            <div className={styles.content}>
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
              <button type="button" className={styles.cta}>
                Open playlist
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
