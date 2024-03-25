"use client";
import { Line } from "rc-progress";
import { Children, FC } from "react";
import { useTheme } from "styled-components";
import {
  Container,
  Content,
  Name,
  ProgressWrapper,
} from "./PokemonStats.style";
import { Stats } from "@entities/pokemon";

interface PokemonStatsProps {
  stats: Stats[];
}

export const PokemonStats: FC<PokemonStatsProps> = (props) => {
  const { stats } = props;
  const theme = useTheme();

  const isAboveFifty = (value: number) => {
    return value > 50;
  };

  return (
    <Container>
      {Children.toArray(
        stats.map((stat) => (
          <Content>
            <Name>{stat.name}</Name>
            <ProgressWrapper>
              <Line
                strokeWidth={2}
                percent={stat.value}
                trailColor={theme.getColor("neutral_400")}
                strokeColor={
                  isAboveFifty(stat.value)
                    ? theme.getColor("success_100")
                    : theme.getColor("error_100")
                }
              />
            </ProgressWrapper>
          </Content>
        ))
      )}
    </Container>
  );
};
