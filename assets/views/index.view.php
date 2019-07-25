<!DOCTYPE html>
<html>
    <head>
        <title>Jumia - Phones</title>
    </head>
<body>

    <table>
    <?php foreach($customers as $customer) : ?>
        <tr>
            <td><?= $customer->id ?></td>
            <td><?= $customer->name ?></td>
            <td><?= $customer->phone ?></td>
        </tr>
    <?php endforeach; ?>
    </table>

</body>
</html>