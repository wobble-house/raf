'use client';
import React from "react";
import { useCallback,useEffect, useState, useRef } from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export function SpaceParticles({children}) {
    const background = '#000000'
    const foreground = '#FFFFFF'
    
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background:{
                    color: {
                        value: background
                    }
                },
                particles: {
                    color: {
                        value: foreground,
                    },
                    move: {
                        enable: true,
                        outModes: {
                            default: "destroy",
                        },
                        speed: 3,
                        trail: {
                            fill: { color: background },
                            length: 50,
                            enable: true,
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 0,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {
                            min: 0.25,
                            max: 12,
                        },
                        animation: {
                            startValue: "min",
                            enable: true,
                            speed: 0.08,
                            destroy: "max",
                            sync: true,
                        },
                    },
                },
                emitters: {
                    direction: "none",
                    rate: {
                        quantity:16,
                        delay: 0.2,
                    },
                    size: {
                        width: 0,
                        height: 0,
                    },
                    position: {
                        x: 50,
                        y: 50,
                    },
                },
            }}
        />
            {children}
            </>
    );
};