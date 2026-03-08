"use client"
import { useState, useEffect, Suspense } from "react";
import NextLink from "next/link";
import {
  Image, Heading, Container, Flex, Box, Center, Stack, VStack, HStack, Code, Button, Link as ChakraLink, SimpleGrid, useBreakpointValue, Avatar,
  Card, Field,
  Fieldset,
  For,
  Input,
  NativeSelect, Text, NumberInput,
  IconButton, Strong,
  Presence,
  useDisclosure,
  ScrollArea
} from "@chakra-ui/react";
import Server from "@/components/types/server";
import DiscordClient from "@/components/lib/system/client";
import FrameIdReader from "@/components/lib/system/frameReader";
import { LuCheck, LuMinus, LuPlus, LuX } from "react-icons/lu";
import { NormalizeRank } from "@/components/lib/games/r6/utils/normalizeRank";
import { RankHistoryCard } from "@/components/lib/games/r6/components/RankHistoryCard";
import Privacy from "./(Pages)/privacy/page";
import Terms from "./(Pages)/terms/page";


import { getLaunchParams } from "@/app/lib/(Discord)/launch";
import PageTemplate from "@/components/ui/page-builder/page-template";
export default function Home() {

  const current = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  const [frameid, setFrameId] = useState<string | null>(null);
  const [client, setClient] = useState<DiscordClient | null>(null);
  async function handleEnter() {
    const instance = new DiscordClient();

    await instance.init();   // runs sdk.ready()
    setClient(instance);

    console.log("SDK initialized");
  }

  let [defaultCaptureTime, setDefaultCaptureTime] = useState<number>(1)
  const defaultAlloted = 5 * 60;
  let [defaultCountdownTime] = useState(() => (defaultCaptureTime + defaultAlloted))


  const [fields, setFields] = useState(
    {
      // status: string, state: string, startStamp: number, currentParty: number, maxParty: number, endStamp?: number
      status: 'Developing ODN', //Developing  | playing <Game Name>
      state: 'In Mainframe',  //Waiting in Queue | Starting Soon| Looking for group
      startStamp: defaultCaptureTime,    //Right now
      endStamp: defaultCountdownTime,    //Timer end
      title: '',  //Game Name
      details: '',
      currentParty: 1,
      maxParty: 4,
    })

  type LaunchContext = {
    game: string | null;
    lfgId: string | null;
    platform: string | null;
    action: string | null;
  };
  const [launch, setLaunch] = useState<LaunchContext | null>(null);
  const [deepLinkParams, setDeepLinkParams] = useState({});

  useEffect(() => {
    async function init() {
      const instance = new DiscordClient();
      instance.sdk.subscribe("DEEP_LINK" as any, ({ args }) => {
        console.log("DEEP_LINK params:", args);
        setDeepLinkParams(args || {});
      });
      await instance.init();   // runs sdk.ready()
      setClient(instance);
      const launchContext = await getLaunchParams();
      setLaunch(launchContext);
      console.log("Launch params:", launchContext);
    }
    init();

    const captureTime = Date.now() / 1000;
    setDefaultCaptureTime(captureTime)
  }, []);

  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const discordID = 123456789012345678; // Replace with dynamic Discord ID as needed
  const [exampleStat, setExampleStat] = useState<{ nameOnPlatform: string; platformType: string }>({
    nameOnPlatform: "MB_FRAG",
    platformType: "steam"
  });

  async function fetchStats() {
    setLoading(true);
    const res = await fetch(`/api/${discordID}/games/r6/stats/playerinfo/mock`,
      {
        method: "POST",
        body: JSON.stringify({
          nameOnPlatform: exampleStat.nameOnPlatform,
          platformType: exampleStat.platformType
        }),
        headers: { "Content-Type": "application/json" }
      });
    const data = await res.json();
    setStats(data);
    setLoading(false);
  }

  const { open, onToggle } = useDisclosure()
  const Home = new PageTemplate();


  return (

    <Container maxW={"container.xl"} >
      Launch Params: {JSON.stringify(launch)}. Deep Link Params: {JSON.stringify(deepLinkParams)}
      <Button onClick={handleEnter}>Enter</Button>
      <Button onClick={fetchStats} loading={loading} ml={2}>Fetch R6 Stats</Button>
    </Container>


  )
}

