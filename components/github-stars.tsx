"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

const COOKIE_NAME = "github-stars";
const ONE_HOUR = 60 * 60 * 1000;

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
};

const setCookie = (name: string, value: string) => {
  const expires = new Date(Date.now() + ONE_HOUR).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
};

export function GithubStars() {
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    async function fetchStars() {
      const cachedStars = getCookie(COOKIE_NAME);

      if (cachedStars) {
        setStars(Number.parseInt(cachedStars, 10));
        return;
      }

      try {
        const repoPath = siteConfig.links.github.replace("https://github.com/", "");
        const response = await fetch(
          `https://api.github.com/repos/${repoPath}`,
        );
        if (!response.ok) {
          setStars(0);
          setCookie(COOKIE_NAME, "0");
          return;
        }
        const data = (await response.json()) as { stargazers_count?: number };
        const count = data.stargazers_count ?? 0;
        setStars(count);
        setCookie(COOKIE_NAME, count.toString());
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
        setStars(0);
        setCookie(COOKIE_NAME, "0");
      }
    }

    fetchStars();
  }, []);

  const displayValue = stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars;

  return (
    <Button
      asChild
      variant="outline"
      className="h-8 px-3 cursor-pointer dark:bg-background dark:hover:bg-input/20 shadow-none"
    >
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub />
        {displayValue}
        <span className="sr-only">Open Github</span>
      </Link>
    </Button>
  );
}