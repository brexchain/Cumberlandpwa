/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroBar } from './components/HeroBar';
import { About } from './components/About';
import { Equipment } from './components/Equipment';
import { Artists } from './components/Artists';
import { Economics } from './components/Economics';
import { Membership } from './components/Membership';
import { Contact } from './components/Contact';
import { BottomNav } from './components/BottomNav';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      
      <main>
        {/* Subtle Background Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/5 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroBar />
          
          <About />
          <Equipment />
          <Artists />
          <Economics />
          <Membership />
          <Contact />
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
}
