import React, {
  useState,
  useContext,
  useMemo,
  useCallback,
  Suspense,
  useEffect,
} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Center,
  Html,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import SearchContext from "../../context/SearchContext";

// Fallback URLs in case of 3D model loading failure
const HOME_ICON_AVAILABLE =
  "https://png.pngtree.com/png-clipart/20220605/original/pngtree-3d-home-icon-with-green-square-frame-png-image_7961176.png";
const HOME_ICON_SOLD =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAclBMVEX/////AAD//Pz/YmL/Zmb/d3f/rq7/trb/+fn/zs7/SUn/bW3/9fX/7e3/sbH/8vL/h4f/xcX/1dX/jo7/oKD/5+f/4OD/Li7/vr7/29v/KCj/PT3/MzP/Tk7/Xl7/kpL/ISH/gYH/FRX/p6f/WFj/mJha3kEtAAAEzklEQVR4nO2c6ZaiQAyFBUVBZXNB3Fpxef9XHKVNAEmgShZnzuT+miNLfRQhdRPoGQxEIpFIJBKJ/jOZrhN6Xui4JruLvXVKWtgdMkXLo5HqGGyZXebW2SjpErhdIZmrXTbOeUlP1qqM9NS9K6ikOI5F3ZP5jIYadYO0Pr4PNI3UoYZ8EDbQYloeae98F2pyIccafxNqTA9lGKuvQfkWx2QYs+LD3huUO+SZDOOnQNUXlLOpYjKMXdg/VHyoZjKMzaRnKJPJ0EXdccheoBIVpkd27xEquqkxZdm9e6ioNpwyHaJ+oCaECXloRmets9cH1JU+fWKbS3rLtXMok8ni6Wo3obfNOoZa0yc/xL+bwz1NtbY7hFrQg07RBK/p53LvdAc1oR+72TrbxaVv74ZZk5pDMVncKp6YCfduoLiwKBm6mDZ+XUCtaaOyiWEH7wr/cujIax/KIbz4Q8fFa7t/Nwys4qKfXqAmO/Kc6C/99N6isWPCvVUozqgEUOJtX3UW1jHmvWsoO6DPiNWBg/N4xhBja4p2oBijskG7W5jHEwyzUPESn0JtSyVwqgOEuHkqbgh8OJB+NtqAYrLOEIZel560I5TtVSVYI6gVzZRUTcceJnF+Km9sDuUm5KkuGOIxPdYYxhrThrAJFFNuXrB2unIrCtYxYTWVPpRDPz83zOIVMTPC7F5ZR2tDMRd5xLQ9qhruBn7Gr1pzdKEYC4LtQ6fODNB5rAlUbRZXMChoaphaQxeq3DRMdYarnyutbZhHmejUg3Jopimst3NFFzCE+FswNfVQnYnJPje48IhmJoS2gfOtMcfwLubWJGBUnJqMmNcFRuVK1ZMSkp/QZ8cQV+oC5UaFsPFoo2gpvHVgvPgOrtivXc/ehS6ZS8ZE370oxotPIYu7yl2g3MGQRxlnRvTdC2I6KrhoqHikilF9OtwvE47nKc6L4/L6CdJTOCoT7nc2X3FG5QpH3DXKzDct4dH16HvBhXtdiM+ZlUdNOGpItxXocGeM/h46KmXfq6cjnoiOyw0R7jGdRdCBaNTijA6wcLpMuHtvSHZNiJvM6yo9XSGwmFx3Kry/tBPmLBjiLSAZuceYKVUtP2Pa0uECTUNuvj/QEKKBaURiw2SwpXfYwA5NQ7wwKjxkUfWgTLhgRyVsI5wy4SJKe7JL2uZivOoMgo7pQ38ucMlmQm9/ZHeunITr0WphqimBe8D4/OuAnERMGcwK2lDYXKOT44iE2kM0Mn3zxsI8Smb3EbXwZ1lcw/fqCV0yVdF6hF3BN4ctZUxamEeD98BaPrP5mzlYvfbW972aVBBY4yLVcZ7OYN6kYl/cVS6jPhVGbmGtB+8cZT/twF8wWb5VHcCs5LM7rjPYq0AvzmSvtuVBqGAOyBWn3u8v2DTkOxItCz7qsl85uvCNzKn4i+oLg8b6wYIhDfcgzzSwYytwzP6hsq6LuQiseD6o0Beg6iVQAiVQAiVQAvU3QB2mpJS/j+sEyhvYhNSr6k6gSl/f/EqgBEqgBEqgBEqgBEqgBEqgBEqgBEqg/i+opC8onT+4V34p2hQqoI8ntaC/W2od6hLSx5NS/bOXplCB3v93ofipGwPlqR1taYT5U7YzG9Xrh5l+Z6hw8CisfL0nEolEIpFI9G/oD9UaW/jl/KYWAAAAAElFTkSuQmCCdata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAclBMVEX/////AAD//Pz/YmL/Zmb/d3f/rq7/trb/+fn/zs7/SUn/bW3/9fX/7e3/sbH/8vL/h4f/xcX/1dX/jo7/oKD/5+f/4OD/Li7/vr7/29v/KCj/PT3/MzP/Tk7/Xl7/kpL/ISH/gYH/FRX/p6f/WFj/mJha3kEtAAAEzklEQVR4nO2c6ZaiQAyFBUVBZXNB3Fpxef9XHKVNAEmgShZnzuT+miNLfRQhdRPoGQxEIpFIJBKJ/jOZrhN6Xui4JruLvXVKWtgdMkXLo5HqGGyZXebW2SjpErhdIZmrXTbOeUlP1qqM9NS9K6ikOI5F3ZP5jIYadYO0Pr4PNI3UoYZ8EDbQYloeae98F2pyIccafxNqTA9lGKuvQfkWx2QYs+LD3huUO+SZDOOnQNUXlLOpYjKMXdg/VHyoZjKMzaRnKJPJ0EXdccheoBIVpkd27xEquqkxZdm9e6ioNpwyHaJ+oCaECXloRmets9cH1JU+fWKbS3rLtXMok8ni6Wo3obfNOoZa0yc/xL+bwz1NtbY7hFrQg07RBK/p53LvdAc1oR+72TrbxaVv74ZZk5pDMVncKp6YCfduoLiwKBm6mDZ+XUCtaaOyiWEH7wr/cujIax/KIbz4Q8fFa7t/Nwys4qKfXqAmO/Kc6C/99N6isWPCvVUozqgEUOJtX3UW1jHmvWsoO6DPiNWBg/N4xhBja4p2oBijskG7W5jHEwyzUPESn0JtSyVwqgOEuHkqbgh8OJB+NtqAYrLOEIZel560I5TtVSVYI6gVzZRUTcceJnF+Km9sDuUm5KkuGOIxPdYYxhrThrAJFFNuXrB2unIrCtYxYTWVPpRDPz83zOIVMTPC7F5ZR2tDMRd5xLQ9qhruBn7Gr1pzdKEYC4LtQ6fODNB5rAlUbRZXMChoaphaQxeq3DRMdYarnyutbZhHmejUg3Jopimst3NFFzCE+FswNfVQnYnJPje48IhmJoS2gfOtMcfwLubWJGBUnJqMmNcFRuVK1ZMSkp/QZ8cQV+oC5UaFsPFoo2gpvHVgvPgOrtivXc/ehS6ZS8ZE370oxotPIYu7yl2g3MGQRxlnRvTdC2I6KrhoqHikilF9OtwvE47nKc6L4/L6CdJTOCoT7nc2X3FG5QpH3DXKzDct4dH16HvBhXtdiM+ZlUdNOGpItxXocGeM/h46KmXfq6cjnoiOyw0R7jGdRdCBaNTijA6wcLpMuHtvSHZNiJvM6yo9XSGwmFx3Kry/tBPmLBjiLSAZuceYKVUtP2Pa0uECTUNuvj/QEKKBaURiw2SwpXfYwA5NQ7wwKjxkUfWgTLhgRyVsI5wy4SJKe7JL2uZivOoMgo7pQ38ucMlmQm9/ZHeunITr0WphqimBe8D4/OuAnERMGcwK2lDYXKOT44iE2kM0Mn3zxsI8Smb3EbXwZ1lcw/fqCV0yVdF6hF3BN4ctZUxamEeD98BaPrP5mzlYvfbW972aVBBY4yLVcZ7OYN6kYl/cVS6jPhVGbmGtB+8cZT/twF8wWb5VHcCs5LM7rjPYq0AvzmSvtuVBqGAOyBWn3u8v2DTkOxItCz7qsl85uvCNzKn4i+oLg8b6wYIhDfcgzzSwYytwzP6hsq6LuQiseD6o0Beg6iVQAiVQAiVQAvU3QB2mpJS/j+sEyhvYhNSr6k6gSl/f/EqgBEqgBEqgBEqgBEqgBEqgBEqgBEqg/i+opC8onT+4V34p2hQqoI8ntaC/W2od6hLSx5NS/bOXplCB3v93ofipGwPlqR1taYT5U7YzG9Xrh5l+Z6hw8CisfL0nEolEIpFI9G/oD9UaW/jl/KYWAAAAAElFTkSuQmCC";
const DEFAULT_MODEL_URL =
  "https://fnbfozyjoymkhaankgps.supabase.co/storage/v1/object/public/housingsystem//house.glb";

// 3D model loading with proper positioning and scale
const HouseModel = ({ modelUrl }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Use the provided URL or fall back to default if there's an error
  const finalUrl = error ? DEFAULT_MODEL_URL : modelUrl;

  const { scene } = useGLTF(
    finalUrl,
    undefined,
    (e) => {
      console.error("Error loading model:", e);
      setError(true);
    },
    () => {
      console.log("Model loaded successfully");
      setLoaded(true);
    }
  );

  // Deep clone the scene to avoid modification of cached object
  const modelScene = useMemo(() => scene.clone(true), [scene]);

  // Auto-center and normalize the model size
  useEffect(() => {
    if (modelScene) {
      // Reset any transformations
      modelScene.position.set(0, 0, 0);

      // Calculate bounding box to normalize size
      const box = new THREE.Box3().setFromObject(modelScene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);

      // Normalize to a consistent scale
      const scale = 5 / maxDim;
      modelScene.scale.set(scale, scale, scale);

      // Center the model
      const center = box.getCenter(new THREE.Vector3());
      modelScene.position.x = -center.x * scale;
      modelScene.position.y = -center.y * scale;
      modelScene.position.z = -center.z * scale;
    }
  }, [modelScene, loaded]);

  return (
    <>
      <Center>
        <primitive object={modelScene} rotation={[0, 0, 0]} />
      </Center>

      {/* {!loaded && !error && (
        <Html center>
          <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg">
            <div className="animate-spin inline-block mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
            Loading 3D model...
          </div>
        </Html>
      )} */}

      {error && (
        <Html center>
          <div className="bg-red-500 text-white p-3 rounded-lg shadow-lg">
            Failed to load custom model. Using default.
          </div>
        </Html>
      )}
    </>
  );
};

// Map Auto-Panner - Automatically adjusts map view when filtering
const MapController = ({ filteredLots }) => {
  const map = useMap();

  useEffect(() => {
    if (filteredLots.length > 0) {
      // Create bounds encompassing all filtered lots
      const bounds = L.latLngBounds(filteredLots.flatMap((lot) => lot.bounds));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [filteredLots, map]);

  return null;
};

// First Person Controls for immersive view
const FirstPersonControls = () => {
  const { camera, gl } = useThree();
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
  });

  useEffect(() => {
    // Set initial position
    camera.position.set(0, 1.7, 5);

    // Key down handler
    const handleKeyDown = (e) => {
      if (e.code === "KeyW")
        setMovement((prev) => ({ ...prev, forward: true }));
      if (e.code === "KeyS")
        setMovement((prev) => ({ ...prev, backward: true }));
      if (e.code === "KeyA") setMovement((prev) => ({ ...prev, left: true }));
      if (e.code === "KeyD") setMovement((prev) => ({ ...prev, right: true }));
      if (e.code === "Space") setMovement((prev) => ({ ...prev, up: true }));
    };

    // Key up handler
    const handleKeyUp = (e) => {
      if (e.code === "KeyW")
        setMovement((prev) => ({ ...prev, forward: false }));
      if (e.code === "KeyS")
        setMovement((prev) => ({ ...prev, backward: false }));
      if (e.code === "KeyA") setMovement((prev) => ({ ...prev, left: false }));
      if (e.code === "KeyD") setMovement((prev) => ({ ...prev, right: false }));
      if (e.code === "Space") setMovement((prev) => ({ ...prev, up: false }));
    };

    // Add event listeners
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Lock pointer for first person camera
    const canvas = gl.domElement;
    canvas.addEventListener("click", () => {
      canvas.requestPointerLock();
    });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      document.exitPointerLock();
    };
  }, [camera, gl]);

  // Handle mouse movement for looking around
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (document.pointerLockElement === gl.domElement) {
        camera.rotation.y -= e.movementX * 0.002;
        camera.rotation.x -= e.movementY * 0.002;

        // Clamp vertical rotation to avoid flipping
        camera.rotation.x = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, camera.rotation.x)
        );
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera, gl]);

  // Animation loop for movement
  useFrame(() => {
    // Get direction vectors
    const direction = new THREE.Vector3();
    const sideDirection = new THREE.Vector3();

    // Forward vector
    camera.getWorldDirection(direction);
    direction.y = 0;
    direction.normalize();

    // Side vector (perpendicular to forward)
    sideDirection.copy(direction).cross(new THREE.Vector3(0, 1, 0));

    // Movement speed
    const speed = 0.1;

    // Apply movement
    if (movement.forward) camera.position.addScaledVector(direction, speed);
    if (movement.backward) camera.position.addScaledVector(direction, -speed);
    if (movement.left) camera.position.addScaledVector(sideDirection, -speed);
    if (movement.right) camera.position.addScaledVector(sideDirection, speed);
    if (movement.up) camera.position.y += speed;

    // Basic collision detection with ground
    if (camera.position.y < 1.7) camera.position.y = 1.7;
  });

  return null;
};

// Enhanced 3D Viewer Modal with proper model display
const HouseViewer = ({ isOpen, onClose, lot }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState("orbit"); // 'orbit' or 'first-person'

  // Reset loading state when lot changes
  useEffect(() => {
    if (lot) setIsLoading(true);
  }, [lot]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col">
      {/* Header Section with enhanced controls */}
      <div className="w-full bg-gray-800 text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">3D House View</h2>
          {lot && (
            <span className="ml-4 px-3 py-1 rounded-full text-sm font-semibold bg-gray-700">
              Lot {lot.number}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {isLoading && (
            <div className="text-sm text-gray-400 animate-pulse flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 border-t-transparent animate-spin"></div>
              Loading model...
            </div>
          )}

          {/* View mode toggle */}
          <div className="bg-gray-700 rounded-md p-1 flex items-center">
            <button
              className={`px-3 py-1 rounded-md text-sm ${
                viewMode === "orbit"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300"
              }`}
              onClick={() => setViewMode("orbit")}
            >
              Orbit View
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm ${
                viewMode === "first-person"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300"
              }`}
              onClick={() => setViewMode("first-person")}
            >
              First Person
            </button>
          </div>

          <button
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>

      {/* Content Section with improved layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Property info panel */}
        <div className="md:col-span-1 bg-gray-800 rounded-lg p-6 text-white shadow-lg">
          {lot ? (
            <div>
              <h3 className="text-2xl font-bold mb-4">Property Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Lot Number</p>
                  <p className="text-2xl font-semibold">{lot.number}</p>
                </div>
                <div>
                  <p className="text-gray-400">Size</p>
                  <p className="text-xl">{lot.size}</p>
                </div>
                <div>
                  <p className="text-gray-400">Status</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-white ${
                      lot.status === "available" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {lot.status.charAt(0).toUpperCase() + lot.status.slice(1)}
                  </span>
                </div>
                <div className="pt-4 border-t border-gray-700 mt-4">
                  <p className="text-gray-400 mb-2">Controls</p>
                  <ul className="text-sm space-y-1">
                    {viewMode === "orbit" ? (
                      <>
                        <li>• Click and drag to rotate</li>
                        <li>• Scroll to zoom in/out</li>
                        <li>• Right click + drag to pan</li>
                      </>
                    ) : (
                      <>
                        <li>• WASD keys to move</li>
                        <li>• Mouse to look around</li>
                        <li>• Spacebar to jump</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400">
              No property selected
            </div>
          )}
        </div>

        {/* 3D Viewer */}
        <div className="md:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-[60vh]">
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ position: [0, 5, 10], fov: 50 }}
              onCreated={() => setIsLoading(false)}
            >
              <Suspense fallback={null}>
                {/* Lighting setup for better visualization */}
                <ambientLight intensity={0.4} />
                <directionalLight
                  position={[10, 10, 5]}
                  intensity={1}
                  castShadow
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                />
                <spotLight
                  position={[-10, 10, 5]}
                  intensity={0.5}
                  castShadow
                  angle={0.3}
                />

                {/* Dynamic camera based on view mode */}
                {viewMode === "orbit" ? (
                  <>
                    <PerspectiveCamera
                      makeDefault
                      position={[0, 5, 10]}
                      fov={50}
                    />
                    <OrbitControls
                      makeDefault
                      enablePan={true}
                      enableZoom={true}
                      enableRotate={true}
                      minDistance={2}
                      maxDistance={20}
                      target={[0, 0, 0]}
                    />
                  </>
                ) : (
                  <FirstPersonControls />
                )}

                {/* Environment and ground */}
                <Environment preset="sunset" />
                <mesh
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, -0.01, 0]}
                  receiveShadow
                >
                  <planeGeometry args={[100, 100]} />
                  <shadowMaterial opacity={0.4} />
                </mesh>

                {/* Ground grid for better orientation */}
                <gridHelper
                  args={[100, 100, "#666666", "#222222"]}
                  position={[0, 0, 0]}
                />

                {/* The house model */}
                {lot && <HouseModel modelUrl={lot.modelUrl} />}
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component with performance optimizations
const HouseMapScreen = () => {
  const [selectedLot, setSelectedLot] = useState(null);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [mapReady, setMapReady] = useState(false);

  // Sample data - in a real app, this would come from an API
  const lots = useMemo(
    () => [
      {
        bounds: [
          [37.8, -122.45],
          [37.801, -122.448],
        ],
        number: 165,
        status: "available",
        size: "5000 sq ft",
        modelUrl:
          "https://fnbfozyjoymkhaankgps.supabase.co/storage/v1/object/public/housingsystem//house4.glb",
      },
      {
        bounds: [
          [37.801, -122.45],
          [37.802, -122.448],
        ],
        number: 166,
        status: "available",
        size: "5500 sq ft",
        modelUrl:
          "https://fnbfozyjoymkhaankgps.supabase.co/storage/v1/object/public/housingsystem//house4.glb",
      },
      {
        bounds: [
          [37.802, -122.45],
          [37.803, -122.448],
        ],
        number: 167,
        status: "sold",
        size: "6000 sq ft",
        modelUrl:
          "https://fnbfozyjoymkhaankgps.supabase.co/storage/v1/object/public/housingsystem//house4.glb",
      },
      {
        bounds: [
          [37.799, -122.448],
          [37.8, -122.446],
        ],
        number: 168,
        status: "available",
        size: "4800 sq ft",
        modelUrl:
          "https://fnbfozyjoymkhaankgps.supabase.co/storage/v1/object/public/housingsystem//house4.glb",
      },
      {
        bounds: [
          [37.798, -122.45],
          [37.799, -122.448],
        ],
        number: 169,
        status: "sold",
        size: "5200 sq ft",
        modelUrl:
          "https://fnbfozyjoymkhaankgps.supabase.co/storage/v1/object/public/housingsystem//house4.glb",
      },
    ],
    []
  );

  // Filter lots based on search query
  const filteredLots = useMemo(() => {
    if (!searchQuery) return lots;

    const query = searchQuery.toLowerCase().trim();
    return lots.filter(
      (lot) =>
        lot.number.toString().includes(query) ||
        lot.status.toLowerCase().includes(query) ||
        lot.size.toLowerCase().includes(query)
    );
  }, [lots, searchQuery]);

  // Statistics for the header
  const stats = useMemo(() => {
    const available = filteredLots.filter(
      (lot) => lot.status === "available"
    ).length;
    const sold = filteredLots.filter((lot) => lot.status === "sold").length;
    return { total: filteredLots.length, available, sold };
  }, [filteredLots]);

  // Memoized icon creation to prevent re-renders
  const getIcon = useCallback((status) => {
    return L.icon({
      iconUrl: status === "available" ? HOME_ICON_AVAILABLE : HOME_ICON_SOLD,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });
  }, []);

  // Handlers
  const handleSearchChange = useCallback(
    (e) => {
      setSearchQuery(e.target.value);
    },
    [setSearchQuery]
  );

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  const handleLotSelect = useCallback((lot) => {
    setSelectedLot(lot);
  }, []);

  const handleMapReady = useCallback(() => {
    setMapReady(true);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      {/* Enhanced Header with Search and Stats */}
      <header className="w-full bg-gray-800 text-white p-4 flex flex-col md:flex-row items-start md:items-center justify-between shadow-md space-y-2 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold">House Map Explorer</h1>
          <div className="text-gray-400 text-sm mt-1">
            Showing {stats.total} lots • {stats.available} available •{" "}
            {stats.sold} sold
          </div>
        </div>

        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            value={searchQuery || ""}
            onChange={handleSearchChange}
            placeholder="Search by lot number, status, or size..."
            className="p-3 pl-10 rounded-md text-black w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* Map and Modal Container */}
      <div className="relative flex-1">
        {/* Loading overlay */}
        {!mapReady && (
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
            <div className="text-white text-xl">Loading map...</div>
          </div>
        )}

        {/* 3D Viewer Modal */}
        <HouseViewer
          isOpen={selectedLot !== null}
          onClose={() => setSelectedLot(null)}
          lot={selectedLot}
        />

        {/* Map Container */}
        <MapContainer
          center={[37.8, -122.435]}
          zoom={16}
          style={{ height: "100%", width: "100%" }}
          className="z-0"
          whenReady={handleMapReady}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Map Controller for auto-panning */}
          <MapController filteredLots={filteredLots} />

          {/* Render lots */}
          {filteredLots.map((lot, index) => {
            const lotCenter = [
              (lot.bounds[0][0] + lot.bounds[1][0]) / 2,
              (lot.bounds[0][1] + lot.bounds[1][1]) / 2,
            ];

            return (
              <React.Fragment key={index}>
                <Rectangle
                  bounds={lot.bounds}
                  pathOptions={{
                    color: lot.status === "available" ? "#10B981" : "#EF4444",
                    weight: 2,
                    fillColor:
                      lot.status === "available" ? "#10B981" : "#EF4444",
                    fillOpacity: 0.3,
                  }}
                  eventHandlers={{
                    click: () => handleLotSelect(lot),
                  }}
                >
                  <Popup>
                    <div className="p-1">
                      <h3 className="text-lg font-bold mb-2">
                        Lot {lot.number}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-semibold">Size:</div>
                        <div>{lot.size}</div>
                        <div className="font-semibold">Status:</div>
                        <div
                          className={
                            lot.status === "available"
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {lot.status.charAt(0).toUpperCase() +
                            lot.status.slice(1)}
                        </div>
                      </div>
                      <button
                        onClick={() => handleLotSelect(lot)}
                        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white w-full py-1 px-2 rounded text-sm"
                      >
                        View 3D Model
                      </button>
                    </div>
                  </Popup>
                </Rectangle>

                <Marker
                  position={lotCenter}
                  icon={getIcon(lot.status)}
                  eventHandlers={{
                    click: () => handleLotSelect(lot),
                  }}
                />
              </React.Fragment>
            );
          })}
        </MapContainer>

        {/* Legend panel */}
        <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-3 z-10">
          <h3 className="font-bold text-sm mb-2">Map Legend</h3>
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-sm bg-green-500 mr-2"></div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-sm bg-red-500 mr-2"></div>
            <span className="text-sm">Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseMapScreen;
