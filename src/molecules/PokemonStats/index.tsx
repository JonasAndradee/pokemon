"use client";
import { Line } from "rc-progress";
import { FC } from "react";
import { useTheme } from "styled-components";
import {
  Container,
  Content,
  Name,
  ProgressWrapper,
} from "./PokemonStats.style";

interface PokemonStatsProps {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export const PokemonStats: FC<PokemonStatsProps> = (props) => {
  const { hp, attack, defense, speed } = props;
  const theme = useTheme();

  const isAboveFifty = (value: number) => {
    return value > 50;
  };

  return (
    <Container>
      <Content>
        <Name>Hp:</Name>
        <ProgressWrapper>
          <Line
            strokeWidth={2}
            percent={hp}
            trailColor={theme.getColor("neutral_400")}
            strokeColor={
              isAboveFifty(hp)
                ? theme.getColor("success_100")
                : theme.getColor("error_100")
            }
          />
        </ProgressWrapper>
      </Content>
      <Content>
        <Name>Attack:</Name>
        <ProgressWrapper>
          <Line
            strokeWidth={2}
            percent={attack}
            trailColor={theme.getColor("neutral_400")}
            strokeColor={
              isAboveFifty(attack)
                ? theme.getColor("success_100")
                : theme.getColor("error_100")
            }
          />
        </ProgressWrapper>
      </Content>
      <Content>
        <Name>Defense:</Name>
        <ProgressWrapper>
          <Line
            strokeWidth={2}
            percent={defense}
            trailColor={theme.getColor("neutral_400")}
            strokeColor={
              isAboveFifty(defense)
                ? theme.getColor("success_100")
                : theme.getColor("error_100")
            }
          />
        </ProgressWrapper>
      </Content>
      <Content>
        <Name>Speed:</Name>
        <ProgressWrapper>
          <Line
            strokeWidth={2}
            percent={speed}
            trailColor={theme.getColor("neutral_400")}
            strokeColor={
              isAboveFifty(speed)
                ? theme.getColor("success_100")
                : theme.getColor("error_100")
            }
          />
        </ProgressWrapper>
      </Content>
    </Container>
  );
};
