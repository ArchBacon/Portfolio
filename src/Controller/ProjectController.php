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
}
