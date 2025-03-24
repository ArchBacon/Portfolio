<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProjectController extends AbstractController
{
    #[Route('/project', name: 'app_project')]
    #[Route('/projects', name: 'app_projects')]
    public function index(): Response
    {
        return $this->redirectToRoute('app_home');
    }

    #[Route('/project/marisol', name: 'app_project_marisol')]
    public function marisol(): Response
    {
        return $this->render('project/marisol.html.twig');
    }
    #[Route('/project/procedural-planets', name: 'app_project_procedural_planets')]
    public function proceduralPlanets(): Response
    {
        return $this->render('project/procedural_planets.html.twig');
    }
    #[Route('/project/snopuck', name: 'app_project_snopuck')]
    public function snopuck(): Response
    {
        return $this->render('project/snopuck.html.twig');
    }
    #[Route('/project/hexgamejam', name: 'app_project_hexgamejam')]
    public function hexgamejam(): Response
    {
        return $this->render('project/hex_gamejam.html.twig');
    }

    #[Route('/project/supersuperheat', name: 'app_supersuperheat')]
    public function supersuperheat(): Response
    {
        return $this->render('project/supersuperheat.html.twig');
    }

    #[Route('/project/portfolio', name: 'app_portfolio')]
    public function portfolio(): Response
    {
        return $this->render('project/portfolio.html.twig');
    }

    #[Route('/project/epc2023', name: 'app_epc2023')]
    public function epc2023(): Response
    {
        return $this->render('project/epc2023.html.twig');
    }
}
