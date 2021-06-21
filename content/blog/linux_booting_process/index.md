---
title: Booting process of the Linux
date: "2021-04-15T01:03:37.121Z"
description: "Booting process of Linux kernel under the hood"
---

In this blog, I am going to walk you through the booting process of the Linux kernel. </br>

**Linux Operating System**</br>
It is a family of free and open-source, operating systems based upon the _linux kernel_ and was developed by _Linus Torvalds_. The first version of the Linux kernel was published on _September 17, 1991_.

Mainly there are 6 steps in which the Linux boots up.<br/>
1\. BIOS<br/>
2\. MBR<br/>
3\. GRUB<br/>
4\. Kernel<br/>
5\. Init<br/>
6\. Run level<br/>

We will look into each of these 6 steps in detail now.

**1\. BIOS (Basic Input Output System)**

- BIOS performs the basic system integrity checks.
- It searches, loads, and executes the bootloader program.
- This bootloader program is usually found in disk drives, SD card readers, CD/DVD ROM.
- Once BIOS executes the bootloader program now the control of the system is transferred to the bootloader.
- Main function of the BIOS is to _load and execute the bootloader program_.

**2\. MBR (Master Boot Record)**

- This MBR is located in the first sector of the bootable disk.
- It’s usually found in `/dev/hda` or `/dev/sda` it depends on the hardware you are using.
- Total size of Master Boot Record is _512 bytes_.
- There 4 components in MBR.<br/>
  1\. Primary Boot Loader, of size 2 Bytes.<br/>
  2\. Partition table information, of size 446 Bytes.<br/>
  3\. MBR validation check, of size 64 Bytes.<br/>
- It contains the information about GRUB.<br/>
- Main function of MBR is to _load and execute the GRUB bootloader_.

**3\. GRUB/GNU GRUB (Grand Unified Boot Loader)**

- GNU stands for GNU’s, not Unix.
- GNU GRUB is the modern bootloader for a Linux-based operating system.
- This GRUB is knowing the File System.
- GRUB loads and executes the file called
  `/boot/grub/grub.conf`
- Once the bootloader loads and executes user will get the splash screen to select the bootloader if the user has installed the multiple kernel images, if the user didn’t select any kernel image default kernel is executed.
- Initially init rd file is loaded which is Initial ramdisk which acts as root file till original storage is mounted.
- Main function of GRUB is to _load and execute the kernel program_.

**4\. Kernel**

- It is the heart of the operating system.
- It takes complete control over the system.
- It mounts the root file system specified in the `/boot/grub/grub.conf` file.
- _It executes the first program which is init and it is located in `/sbin/init`_.
- Main function of the kernel is to _load file system and run the init program_.

**5\. Init**

- It decides the run level of the Linux kernel.
- Run level is found in `/etc/inittab`
- Run level decides which are the programs to be run during the booting of the system.
- There are various run levels.<br/>
  1 - Single user.<br/>
  2 - Multiuser without NFS(Network File System).<br/>
  3 - Multiuser with no GUI.<br/>
  4 - Unused.<br/>
  5 - Multiuser with GUI.<br/>
  6 - Reboot.<br/>

- Main function of the Init program is _to decide the run level_.

**6\. Run Level**

- Run levels are nothing but the various type of services.
- Run level executes the run level program which is decided by the user during the Init program.
- There are 7 run levels and these run levels are found in different directories.<br/>
  Run level 0 - /etc/rc.d/rc0.d/<br/>
  Run level 1 - /etc/rc.d/rc1.d/<br/>
  Run level 2 - /etc/rc.d/rc2.d/<br/>
  Run level 3 - /etc/rc.d/rc3.d/<br/>
  Run level 4 - /etc/rc.d/rc4.d/<br/>
  Run level 5 - /etc/rc.d/rc5.d/<br/>
  Run level 6 - /etc/rc.d/rc6.d/<br/>
- This folder location various for different linux based distribution.
- Usually these programs start with “S” or “K”, “S” stands for _start up_ program executed during booting of the system and “K” stands for _kill_ which is executed during shutting down the system.

This is how the Linux kernel boots up.

_Happy Coding !!!_

Reference <br/>
[GeeksforGeeks](https://www.geeksforgeeks.org/)
