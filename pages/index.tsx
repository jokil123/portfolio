import MouseWiggle from "@/components/MouseWiggle";
import Landing from "@/components/SubPages/Landing";
import ProjectShowcase from "@/components/SubPages/ProjectShowcase";

export default function Home() {
  return (
    <>
      <Landing />
      <ProjectShowcase
        title={["Fisherman's Friend", "Gaming Challenge"]}
        description={
          "Development of the core mechanics behind a virtual obstacle run, part of a marketing campaign for Fisherman's Friend Switzerland at the HeroFest 2022."
        }
        imagePath={"/projects/fishermansfriend.jpg"}
        tags={["dev", "threeD", "design"]}
      />
      <MouseWiggle wiggleStrength={1} wiggleDissipation={0.0001}>
        <div
          style={{ height: "100px", width: "200px", backgroundColor: "red" }}
        ></div>
      </MouseWiggle>
    </>
  );
}
