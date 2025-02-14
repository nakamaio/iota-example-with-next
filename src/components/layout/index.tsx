import { ConnectButton } from '@iota/dapp-kit'

import styles from '~/styles/Layout.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.title}>IOTA Move Example dApp</span>
        <ConnectButton />
      </header>

      <main className={styles.content}>{children}</main>
    </>
  )
}

export default Layout
