<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ProjectController extends AbstractController
{
    #[Route('/marisol', name: 'app_project_marisol')]
    public function marisol(): Response
    {
        return $this->render('project/marisol.html.twig');
    }

    #[Route('/hex-gamejam', name: 'app_project_hexgamejam')]
    public function hexgamejam(): Response
    {
        return $this->render('project/hexgamejam.html.twig');
    }
}
