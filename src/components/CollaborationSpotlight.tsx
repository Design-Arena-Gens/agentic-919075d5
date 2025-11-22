import Image from 'next/image';
import Link from 'next/link';
import { collaborations } from '@lib/channel-data';
import styles from './CollaborationSpotlight.module.css';

export function CollaborationSpotlight() {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.container} surface`}>
        <div className={styles.content}>
          <span className="chip">Collaboration Spotlight</span>
          <h2>Creating with the community</h2>
          <p>
            Partnering with filmmakers, musicians, and innovators to bring ambitious ideas to life. Check out the
            latest collaborations and guest features.
          </p>
        </div>
        <div className={styles.list}>
          {collaborations.map((collab) => (
            <Link key={collab.id} href={collab.link} className={styles.item}>
              <div className={styles.thumbnail}>
                <Image
                  src={collab.thumbnail}
                  alt={collab.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                />
              </div>
              <div className={styles.meta}>
                <p className={styles.title}>{collab.title}</p>
                <span className={styles.creator}>with {collab.creator}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
