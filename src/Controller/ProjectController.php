<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ProjectController extends AbstractController
{
    #[Route('/project', name: 'app_project')]
    public function index(): Response
    {
        return $this->render('project/demo.html.twig');
    }

    #[Route('/hex-game-jam', name: 'app_project_hex-game-jam')]
    public function a(): Response
    {
        return $this->render('project/demo.html.twig');
    }
}
