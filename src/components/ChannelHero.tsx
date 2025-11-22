import Image from 'next/image';
import Link from 'next/link';
import { channelProfile } from '@lib/channel-data';
import styles from './ChannelHero.module.css';

export function ChannelHero() {
  return (
    <header className={`${styles.hero} surface`}>
      <div className={styles.heroMedia}>
        <div className={styles.heroThumbnail}>
          <Image
            src={channelProfile.heroVideo.thumbnail}
            alt={channelProfile.heroVideo.title}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            priority
          />
          <span className={styles.duration}>{channelProfile.heroVideo.duration}</span>
          <div className={styles.overlay} />
        </div>
      </div>
      <div className={styles.heroContent}>
        <span className="chip">Featured Upload</span>
        <h1>{channelProfile.name}</h1>
        <p className={styles.handle}>{channelProfile.handle}</p>
        <p className={styles.description}>{channelProfile.description}</p>
        <p className={styles.subscribers}>{channelProfile.subscribers}</p>
        <div className={styles.actions}>
          <Link href="https://youtube.com" className={styles.primaryCta}>
            Subscribe on YouTube
          </Link>
          <div className={styles.socials}>
            {channelProfile.socials.map((social) => (
              <Link key={social.label} href={social.href} className={styles.socialLink}>
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
